const radioButtonsBlock = document.querySelectorAll('.radio_buttons')
const radioButtonsBlockInputs = document.querySelectorAll('.radio_buttons > .radio_buttons__item > input')
const toggleInputs = document.querySelectorAll('.toggle > .inactive')
const likeButton = document.querySelectorAll('.like_button > .inactive')
const rateButtonBlock = document.querySelectorAll('.rate_button')

/*RANGE*/
const rangeContainerAll = document.querySelectorAll('.range__container')
const inputLeftAll = document.querySelectorAll('.range__container > .range__middle > .range__slider > #input-left')
const inputRightAll = document.querySelectorAll('.range__container > .range__middle > .range__slider > #input-right')
const trackAll = document.querySelectorAll('.range__container > .range__middle > .range__slider > .slider > .track')
const rangeAll = document.querySelectorAll('.range__container > .range__middle > .range__slider > .slider > .range')
const thumbLeftAll = document.querySelectorAll('.range__container > .range__middle > .range__slider > .slider > .thumb.left')
const thumbRightAll = document.querySelectorAll('.range__container > .range__middle > .range__slider > .slider > .thumb.right')
const rangePriceAll = document.querySelectorAll('.range__container > .range__price')


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

rateButtonBlock.forEach((item) => {
  item.querySelectorAll('div').forEach((elem, index) => {

    elem.addEventListener('click', () => {
      for (let i=0; i<=index; i++) {
        item.querySelectorAll('div')[i].classList.add('active')
        item.querySelectorAll('div')[i].classList.remove('inactive')
        
      }

      for (let i=item.querySelectorAll('div').length-1; i>index; i--) {
        item.querySelectorAll('div')[i].classList.remove('active')
        item.querySelectorAll('div')[i].classList.add('inactive')
        }
  })
})
})


function insertSpace(number) {
  if (Math.ceil(number/1000)>1) {
  return number.toString().substring(0, Math.round(number/1000).toString().length) + " " + number.toString().substring(Math.round(number/1000).toString().length);
  }
  else {
    return number
  }
}

console.log(insertSpace(12365))
console.log(insertSpace(146))



rangeContainerAll.forEach((rangeContainer, index) => {

  inputLeftAll[index].addEventListener('input', () => {
    inputLeftAll[index].value  = Math.min(+(inputLeftAll[index].value), +(inputRightAll[index].value))
    let percent = +(inputLeftAll[index].value)/+(inputLeftAll[index].max)*100
    rangeAll[index].style.left = percent + '%'
    thumbLeftAll[index].style.left = percent + '%'
    rangePriceAll[index].textContent = insertSpace(inputLeftAll[index].value) + '₽ - ' +  insertSpace(inputRightAll[index].value) + '₽'
  })

  inputRightAll[index].addEventListener('input', () => {
    inputRightAll[index].value  = Math.max(+(inputLeftAll[index].value), +(inputRightAll[index].value))
    let percent = 100-(+(inputRightAll[index].value)/+(inputLeftAll[index].max)*100)
    rangeAll[index].style.right = percent + '%'
    thumbRightAll[index].style.right = percent + '%'
    rangePriceAll[index].textContent = insertSpace(inputLeftAll[index].value) + '₽ - ' +  insertSpace(inputRightAll[index].value) + '₽'
  })
})