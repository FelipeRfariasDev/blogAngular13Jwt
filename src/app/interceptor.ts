import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './authentication/service/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class Interceptor implements HttpInterceptor {
    private openURLs = [`${environment.apiUrl}`];
    private fileAPI = [
        'http://localhost:8080/v1/logged/save',
        'http://localhost:8080/v1/logged/download'
    ];

    private refreshInProgress = false;

    constructor(private authService: AuthService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const lang = window.navigator.language.startsWith('pt')
            ? 'pt-BR'
            : 'en-US';

        let headers = {
            'Access-Control-Expose-Headers': 'Authorization',
            'Access-Control-Allow-Credentials': 'true',
            'Accept-Language': lang
        };

        if (this.fileAPI.indexOf(request.url) === -1) {
            headers = Object.assign(headers, {
                'Content-Type': 'application/json',
                Accept: 'application/json, text/csv, text/plain, */*'
            });
        }

        if (
            this.authService.isLoggedIn() &&
            this.openURLs.indexOf(request.url) === -1
        ) {
            headers = Object.assign(headers, {
                Authorization: 'Bearer ' + this.authService.getAccessToken()
            });
            this.verifyIfTokenIsExpired();
        }

        return next.handle(request.clone({ setHeaders: headers }));
    }

    private verifyIfTokenIsExpired() {
        if (!this.authService.isLoggedIn() && !this.refreshInProgress) {
            this.refreshInProgress = true;

            this.authService.refreshToken().subscribe(
                (data: Token) => {
                    this.refreshInProgress = false;
                    this.authService.setTokens(
                        data.accessToken,
                        data.refreshToken
                    );
                },
                error => {
                    this.refreshInProgress = false;
                    console.log('refresh token error', error);
                    this.authService.logout();
                }
            );
        }
    }
}
