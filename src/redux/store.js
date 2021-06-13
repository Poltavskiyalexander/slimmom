import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
  },
});

export const store = configureStore({
  reducer: {
  },
  middleware: [...defaultMiddleware, ],
})

export const persistor = persistStore(store);