import { createStore } from 'redux';
import languageReducer from './language/languageReducer';
const store = createStore(languageReducer)

export default store

//通过类型的反向注入来获取现在及未来所有的store类型
// export type RootState = ReturnType<typeof store.getState>;