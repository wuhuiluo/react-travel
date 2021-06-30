import { createStore, combineReducers } from 'redux';
import languageReducer from './language/languageReducer';
import RecommendProductsReducer from './recommendProducts/recommendProductsReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: RecommendProductsReducer
})
const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export default store

//通过类型的反向注入来获取现在及未来所有的store类型
// export type RootState = ReturnType<typeof store.getState>;