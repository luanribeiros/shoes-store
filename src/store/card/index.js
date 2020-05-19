import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addCard = createAction('ADD_CARD');
export const addCards = createAction('ADD_CARDS');

export default createReducer(INITIAL_STATE, {
  [addCard.type]: (state, action) => [...state, action.payload],
  [addCards.type]: (state, action) => [...action.payload],
});
