export const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', evt => {
            if(evt.target) {
                evt.preventDefault()
            }
            showModal(modal)
        })

        close.addEventListener('click', () => {
            closeModal(modal)
        })

        modal.addEventListener('click', evt => {
            if(evt.target === modal) {
                closeModal(modal)
            }
    })
    }

    const engineerBtn = document.querySelector('.popup_engineer_btn'),
          engineerModal = document.querySelector('.popup_engineer'),
          engineerModalClose = document.querySelector('.popup_engineer .popup_close')
    

    function showModal(target) {
        target.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }

    function closeModal(target) {
        target.style.display = 'none'
        document.body.style.overflow = ''
    }

   bindModal(engineerBtn, engineerModal, engineerModalClose)

}

