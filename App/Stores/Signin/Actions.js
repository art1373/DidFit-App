import { createActions } from 'reduxsauce'
const { Types, Creators } = createActions({
  submitUserEmail: ['userEmail'],
})

export const SigninTypes = Types
export default Creators
