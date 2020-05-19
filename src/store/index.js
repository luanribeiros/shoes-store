import { configureStore } from '@reduxjs/toolkit';

import cardReducer from './card';
import messageReducer from './message';
import cartReducer from './cart';

export default configureStore({
  reducer: {
    card: cardReducer,
    message: messageReducer,
    cart: cartReducer,
  },
});
// default with redux-thunk
