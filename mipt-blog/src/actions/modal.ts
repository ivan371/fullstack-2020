export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

export function openModal(modalName: string) {
  return {
    type: MODAL_OPEN,
    modalName
  }
}

export function closeModal() {
  return {
    type: MODAL_CLOSE
  }
}