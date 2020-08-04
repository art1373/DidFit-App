import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ProfileTypes } from './Actions'

export const toggleModalShareSend = (state) => ({
  ...state,
  modalShareSendVisible: !state.modalShareSendVisible,
})
export const toggleEditModal = (state) => ({
  ...state,
  modalEditVisible: !state.modalEditVisible,
})
export const toggleIsMyProfile = (state) => ({
  ...state,
  myProfile: !state.myProfile,
})
export const login = (state) => ({
  ...state,
  isAuth: true,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ProfileTypes.TOGGLE_EDIT_MODAL]: toggleEditModal,
  [ProfileTypes.TOGGLE_SHARE_MODAL]: toggleModalShareSend,
  [ProfileTypes.TOGGLE_IS_MY_PROFILE]: toggleIsMyProfile,
  [ProfileTypes.USER_IS_AUTH]: login,
})
