import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AuthState } from 'src/app/core/auth/models';
import { authReducer } from 'src/app/core/auth/store/reducers/auth.reducer';
import { environment } from '../../../environments/environment';

export interface AppState {
  auth: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
