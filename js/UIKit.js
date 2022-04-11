const radioButtonsBlock = document.querySelectorAll('.radio_buttons')
const radioButtonsBlockInputs = document.querySelectorAll('.radio_buttons > .radio_buttons__item > input')
const toggleInputs = document.querySelectorAll('.toggle > .inactive')
const likeButton = document.querySelectorAll('.like_button > .inactive')


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

toggleInputs.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active')
  })
})

let count = 0;
likeButton.forEach(item => {
    item.addEventListener('click', () => {
        count++;
        item.classList.toggle('active')
        console.log(item)
        if (count%2===1) {
        item.querySelector('.digit').textContent = +(item.querySelector('.digit').textContent) + 1
        } else {
            item.querySelector('.digit').textContent = +(item.querySelector('.digit').textContent) -1
        }
    })
})
