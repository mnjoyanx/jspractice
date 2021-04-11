const tabs = (header, tab, content, active) => {
    const headerSelector = document.querySelector(header),
          tabSelector = document.querySelectorAll(tab),
          contentSelector = document.querySelectorAll(content)
    
    function hideTabContent() {
        contentSelector.forEach(item => {
            item.style.display = 'none'
        })

        tabSelector.forEach(item => {
            item.classList.remove(active)
        })
    }

    function showTabContent(idx = 0) {
        contentSelector[idx].style.display = 'block'
        tabSelector[idx].classList.add(active)
    }

    hideTabContent()
    showTabContent()

    headerSelector.addEventListener('click', event => {
        const target = event.target
        if (target.classList.contains(tab.replace(/\./, '')) || target.parentNode.classList.contains(tab.replace(/\./, ''))) {
            tabSelector.forEach((item, idx) => {
                if(target == item || target.parentNode == item)
                hideTabContent()
                showTabContent(idx)
            })
        }
    })

}


export default tabs