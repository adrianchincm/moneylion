import { createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {rootReducer} from './reducers/reducers'
 
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = createStore(persistedReducer, composeEnhancers());

export const persistor = persistStore(store);

