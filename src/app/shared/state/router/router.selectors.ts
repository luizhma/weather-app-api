import { createFeatureSelector, createSelector } from '@ngrx/store';

import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { RouterState } from './rourter.reducer';

const selectRouterReducerState = createFeatureSelector<RouterReducerState<RouterState>>('router')

export const selectRouterState = createSelector (
    selectRouterReducerState,
    (routerReducerState: RouterReducerState<RouterState>) => (routerReducerState && routerReducerState.state) || {},
);

export const selectRouterQueryParams = createSelector(
    selectRouterState,
    (routerState: RouterState) => (routerState && routerState.queryParams) || {}

);