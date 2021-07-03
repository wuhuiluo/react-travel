import { createStore, applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import RecommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk';
import { actionLog } from './middlewares/actionLog'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productDetailSlice } from './productDetail/slice'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice';

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: RecommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer
})
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>
export default store

//通过类型的反向注入来获取现在及未来所有的store类型
// export type RootState = ReturnType<typeof store.getState>;