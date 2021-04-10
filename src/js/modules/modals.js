export const modals = () => {
    console.log('modal')
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', evt => {
            if(evt.target) {
                evt.preventDefault()
            }

            modal.style.display = 'block'
            document.body.style.overflow = 'hidden'
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = ''
        })
    }

    const engineerBtn = document.querySelector('.popup_engineer_btn'),
          engineerModal = document.querySelector('.popup_engineer'),
          engineerModalClose = document.querySelector('.popup_engineer .popup_close')

   bindModal(engineerBtn, engineerModal, engineerModalClose)

}

