import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
  } from "redux-persist";
  import authReducer from './auth';
  import storage from "redux-persist/lib/storage";


  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };


  const rootReducer = combineReducers({
    auth: authReducer,
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
});


export let persistor = persistStore(store);
