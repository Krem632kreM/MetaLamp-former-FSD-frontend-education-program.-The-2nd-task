const radioButtonsBlock = document.querySelectorAll('.radio_buttons')
const radioButtonsBlockInputs = document.querySelectorAll('.radio_buttons > .radio_buttons__item > input')

radioButtonsBlockInputs.forEach((item, index) => {
  radioButtonsBlock.forEach((elem,i) => {
    item.addEventListener('click', () => {
      if (item.parentNode.parentNode === elem) {
      
        radioButtonsBlock[i].querySelectorAll('.radio_buttons > .radio_buttons__item > input').forEach((el, ind) => {
          el.addEventListener('click', () => {
            radioButtonsBlock[i].querySelectorAll('.radio_buttons > .radio_buttons__item > input').forEach((e, k) => {
              if(k!==ind) e.checked=false
            })
          })
        })
      }
    })
  })
})
