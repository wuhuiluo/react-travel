import { createStore, combineReducers, applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import RecommendProductsReducer from './recommendProducts/recommendProductsReducer';
import thunk from 'redux-thunk';
import { actionLog } from './middlewares/actionLog'
const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: RecommendProductsReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

export type RootState = ReturnType<typeof store.getState>
export default store

//通过类型的反向注入来获取现在及未来所有的store类型
// export type RootState = ReturnType<typeof store.getState>;