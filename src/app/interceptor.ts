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

@Injectable()
export class Interceptor implements HttpInterceptor {
    private openURLs = [`${environment.apiUrl}`];
    private refreshInProgress = false;

    constructor(private authService: AuthService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        let headers = {
            'Access-Control-Expose-Headers': 'Authorization',
            'Access-Control-Allow-Credentials': 'true'
        };
        
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
                (data: any) => {
                    this.refreshInProgress = false;
                    this.authService.setAccessToken(
                        data.accessToken
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
