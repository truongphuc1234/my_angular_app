import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { AuthActionTypes } from "../../enums/user-actions.enum";
import { AuthHttpService } from "../../services/http/auth-http.service";
import { loginAction, loginError, loginSuccess } from "../actions";

@Injectable()
export class AuthEffects {
    constructor(
        private actions: Actions,
        private authService: AuthHttpService,
    ) { }

    login$ = createEffect(() => this.actions.pipe(
        ofType(loginAction),
        switchMap(payload => {
            return this.authService.login(payload.username, payload.password).pipe(map(data => loginSuccess(data)), catchError(err => { return of(loginError(err)) }))
        })
    ))

}