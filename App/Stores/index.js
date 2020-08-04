import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as ProfileReducer } from './Profile/Reducers'
import { reducer as SigninReducer } from './Signin/Reducers'

export default () => {
  const rootReducer = combineReducers({
    example: ExampleReducer,
    profile: ProfileReducer,
    signin: SigninReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
