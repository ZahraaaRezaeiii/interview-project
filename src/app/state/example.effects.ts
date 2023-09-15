import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, filter, mergeMap } from 'rxjs/operators';
import { increment } from './counter.actions';
import { addToSecondComponentList } from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  // Listen for the increment action and add items to the secondComponentList when the count is a multiple of 10.
  addToSecondComponentList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      filter((action) => action.payload % 10 === 0),
      mergeMap((action) => [
        addToSecondComponentList({ item: Item ${action.payload} }),
      ])
    )
  );
}