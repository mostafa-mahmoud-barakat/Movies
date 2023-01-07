import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import favoritesReducer from '../Reducer/reducer'



const store=createStore(favoritesReducer,composeWithDevTools())

export default store
