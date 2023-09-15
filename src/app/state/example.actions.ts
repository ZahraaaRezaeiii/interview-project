import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const addToSecondComponentList = createAction('[Counter] Add To Second Component List', props<{ item: string }>());