import {
  createReducer,
  on
} from '@ngrx/store';
import { AuthState } from '../../models';
import * as AuthAction from '../actions';

const initialState: AuthState = {}

export const authReducer = createReducer(
  initialState,
  on(AuthAction.loginSuccess, (state, payload) => payload));
