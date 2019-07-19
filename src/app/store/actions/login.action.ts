import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Login',
  props<{ isLogged: boolean }>()
);
