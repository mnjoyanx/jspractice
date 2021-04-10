export const modals = () => {
    function bindModal(trigger, modal, close) {
        const btnSelector = document.querySelectorAll(trigger),
            modalSelector = document.querySelector(modal),
            closeSelector = document.querySelector(close)

        btnSelector.forEach(item => {
            item.addEventListener('click', evt => {
                showModal(modalSelector)
            })
        })

        closeSelector.addEventListener('click', () => {
            closeModal(modalSelector)
        })

        modalSelector.addEventListener('click', evt => {
            if(evt.target === modalSelector) {
                closeModal(modalSelector)
            }
        })


        function showModal(target) {
            target.style.display = 'block'
            document.body.classList.add('modal-open')
        }

        function closeModal(target) {
            target.style.display = 'none'
            document.body.classList.remove('modal-open')
        }
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')


    function timeModal(selector, timer) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'
        }, timer)
    }

    timeModal('.popup', 3000)
}

