import { createReducer, on } from '@ngrx/store';
import { increment, addToSecondComponentList } from './counter.actions';

export interface CounterState {
  count: number;
  secondComponentList: string[];
}

export const initialState: CounterState = {
  count: 0,
  secondComponentList: [],
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(addToSecondComponentList, (state, { item }) => ({ ...state, secondComponentList: [...state.secondComponentList, item] }))
);

export function counterReducer(state: CounterState | undefined, action: any) {
  return _counterReducer(state, action);
}