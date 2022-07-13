import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return of(null).pipe(mergeMap(() => {
            //console.log('Fake Backend Interepted');

            return next.handle(req);
        }));
    }
}