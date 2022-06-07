import { createAction, props } from '@ngrx/store';
import { AuthActionTypes } from '../../enums/user-actions.enum';
import { AuthToken, LoginRequest } from '../../models';

export const loginAction = createAction(AuthActionTypes.LogIn, props<LoginRequest>())
export const logoutAction = createAction(AuthActionTypes.LogOut)
export const signUpAction = createAction(AuthActionTypes.SignUp, props<LoginRequest>())
export const loginSuccess = createAction(AuthActionTypes.LogInSuccess, props<AuthToken>())
export const loginError = createAction(AuthActionTypes.LogInError, props<any>())