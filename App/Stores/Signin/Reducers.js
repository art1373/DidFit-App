import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SigninTypes } from './Actions'

export const submitUserEmail = (state, { userEmail }) => ({
  ...state,
  userEmail: userEmail,
})

export const reducer = createReducer(INITIAL_STATE, {
  [SigninTypes.SUBMIT_USER_EMAIL]: submitUserEmail,
})
