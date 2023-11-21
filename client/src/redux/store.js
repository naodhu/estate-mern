// Import necessary functions and modules
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage engine

// Combine all reducers into a rootReducer. In this case, there's only one reducer: userReducer.
const rootReducer = combineReducers({ user: userReducer });

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // Key for the persisted state in the storage engine
  storage, // Storage engine to use
  version: 1, // Version of the state
};

// Create a persisted reducer using the configuration and the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer and disable the serializable check for the middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check
    }),
});

// Create a persistor using the store. This persistor will control the persistence process.
export const persistor = persistStore(store);
