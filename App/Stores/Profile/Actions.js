import { createActions } from 'reduxsauce'
const { Types, Creators } = createActions({
  toggleEditModal: null,
  toggleShareModal: null,
  toggleIsMyProfile: null,
  userIsAuth: null,
})

export const ProfileTypes = Types
export default Creators
