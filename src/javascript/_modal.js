export function initModal() {
  const modalBtn = document.querySelector('#MODAL_BTN')
  const modal = document.querySelector('#MODAL')
  const closeBtn = modal.querySelector('.close')
  const cancelBtn = modal.querySelector('[href="#cancel"]')

  modalBtn.addEventListener('click', () => {
    if (typeof modal.showModal === 'function') {
      modal.showModal()
    } else {
      modal.setAttribute('open', '')
    }
  })

  closeBtn.addEventListener('click', () => {
    modal.close()
  })

  cancelBtn.addEventListener('click', () => {
    modal.close()
  })
}
