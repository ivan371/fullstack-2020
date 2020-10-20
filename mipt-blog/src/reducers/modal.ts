import {MODAL_OPEN, MODAL_CLOSE} from '../actions/modal'

const initialState: State['modal'] = {
  modalName: ''
}

export default function modal(state = initialState, action: any) {
  switch(action.type) {
    case MODAL_OPEN:
      return {
        modalName: action.modalName
      }
    case MODAL_CLOSE:
      return {
        modalName: ''
      }
  }

  return state
}