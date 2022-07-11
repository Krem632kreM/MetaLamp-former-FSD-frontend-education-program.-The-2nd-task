const radioButtonsBlock = document.querySelectorAll('.radio_buttons')
const radioButtonsBlockInputs = document.querySelectorAll('.radio_buttons > .radio_buttons__item > input')
const toggleInputs = document.querySelectorAll('.toggle > .inactive')
const likeButton = document.querySelectorAll('.like_button > .inactive')
const rateButtonBlock = document.querySelectorAll('.rate_button')
const dropdown = document.querySelectorAll('.dropdown')
dropdownRooms = document.querySelectorAll('.dropdown_rooms')

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

const dropdownButtonTitle = (number) => {
  if (number === 11 || number === 12 || number === 13 || number === 14) return 'гостей'
  else if (number % 10  === 1) return 'гость'
  else if (number % 10  === 2 || number % 10  === 3 || number % 10  === 4 ) return 'гостя'
  else return 'гостей'
}

dropdown.forEach(item => {
  item.querySelector('.dropdown__button').addEventListener('click', () => {

    if (item.querySelector('.dropdown__list').style.display === "flex") {
      item.querySelector('.dropdown__list').style.display = "none"
      item.querySelector('.dropdown__button').style.borderRadius = '4px'
      item.querySelector('.dropdown__button').style.setProperty('--sq', 'rotate(0deg)')
    } else {
      item.querySelector('.dropdown__list').style.display = "flex"
      item.querySelector('.dropdown__button').style.borderRadius = '4px 4px 0 0'
      item.querySelector('.dropdown__button').style.setProperty('--sq', 'rotate(180deg)')
    }
  })
    let countDropdownForClear = 0;
  item.querySelectorAll('.dropdown__list > .dropdown__list-item > .count').forEach(elem => {
    let countDropdown = 0;
  
    elem.querySelector('.count-next').addEventListener('click', () => {
      countDropdown++
      countDropdownForClear++
      if (countDropdown>0) {
        elem.querySelector('.count-prev').style.opacity = 1
        item.querySelector('.dropdown__list > .buttons > .clear').style.display = 'block'
        elem.querySelector('.count-prev').style.setProperty('pointer-events', 'all')
      }
      if (countDropdown<=0) {
        elem.querySelector('.count-prev').style.opacity = 0.38
        countDropdown = 0
      }elem
      elem.querySelector('.count-digit').textContent = countDropdown
      item.querySelector('.dropdown__button').innerHTML = `${countDropdownForClear} ${dropdownButtonTitle(countDropdownForClear)}`
    })

    elem.querySelector('.count-prev').addEventListener('click', () => {
      countDropdown--
      countDropdownForClear--
      if (countDropdownForClear <= 0) {
        item.querySelector('.dropdown__list > .buttons > .clear').style.display = 'none';
        item.querySelector('.dropdown__button').innerHTML = `Сколько гостей`
        countDropdownForClear = 0;
      }
      if (countDropdown>0) {
        elem.querySelector('.count-prev').style.opacity = 1
        item.querySelector('.dropdown__list > .buttons > .clear').style.display = 'block'
      }
      if (countDropdown<=0) {
        elem.querySelector('.count-prev').style.opacity = 0.38
        elem.querySelector('.count-prev').style.setProperty('pointer-events', 'none')
        countDropdown = 0
      }

      (countDropdownForClear === 0) ? item.querySelector('.dropdown__button').innerHTML = `Сколько гостей` : item.querySelector('.dropdown__button').innerHTML = `${countDropdownForClear} ${dropdownButtonTitle(countDropdownForClear)}`
      elem.querySelector('.count-digit').textContent = countDropdown
    })

    item.querySelector('.dropdown__list > .buttons > .clear').addEventListener('click', () => {
          countDropdownForClear = 0; 
          countDropdown = 0;
          elem.querySelector('.count-digit').textContent = countDropdown
          item.querySelector('.dropdown__list > .buttons > .clear').style.display = 'none'
          item.querySelector('.dropdown__button').innerHTML = `Сколько гостей`
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

dropdownRooms.forEach(item => {
  item.querySelector('.dropdown_rooms__button').addEventListener('click', () => {

    if (item.querySelector('.dropdown_rooms__list').style.display === "flex") {
      item.querySelector('.dropdown_rooms__list').style.display = "none"
      item.querySelector('.dropdown_rooms__button').style.borderRadius = '4px'
      item.querySelector('.dropdown_rooms__button').style.setProperty('--sq', 'rotate(0deg)')
    } else {
      item.querySelector('.dropdown_rooms__list').style.display = "flex"
      item.querySelector('.dropdown_rooms__button').style.borderRadius = '4px 4px 0 0'
      item.querySelector('.dropdown_rooms__button').style.setProperty('--sq', 'rotate(180deg)')
    }
  })
    let countDropdownForClear = 0;
  item.querySelectorAll('.dropdown_rooms__list > .dropdown_rooms__list-item > .count').forEach(elem => {
    let countDropdown = 0;
  
    elem.querySelector('.count-next').addEventListener('click', (event) => {
      countDropdown++
      countDropdownForClear++
      if (countDropdown>0) {
        elem.querySelector('.count-prev').style.opacity = 1
        elem.querySelector('.count-prev').style.setProperty('pointer-events', 'all')
      }
      if (countDropdown<=0) {
        elem.querySelector('.count-prev').style.opacity = 0.38
        countDropdown = 0
      }
      elem.querySelector('.count-digit').textContent = countDropdown
      //item.querySelector('.dropdown_rooms__button').innerHTML = `${}`

      const countDigits = event.target.closest('.dropdown_rooms__list').querySelectorAll('.dropdown_rooms__list-item > .count > .count-digit')

      let str ='';

      const Bedrooms = (number) => {
        if (number === 11 || number === 12 || number === 13 || number === 14) return 'спален'
        else if (number % 10  === 1) return 'спальня'
        else if (number % 10  === 2 || number % 10  === 3 || number % 10  === 4 ) return 'спальни'
        else return 'спален'
      }

      const Beds = (number) => {
        if (number === 11 || number === 12 || number === 13 || number === 14) return 'кроватей'
        else if (number % 10  === 1) return 'кровать'
        else if (number % 10  === 2 || number % 10  === 3 || number % 10  === 4 ) return 'кровати'
        else return 'кроватей'
      }

      const Bathrooms = (number) => {
        if (number === 11 || number === 12 || number === 13 || number === 14) return 'ванных комнат'
        else if (number % 10  === 1) return 'ванная комната'
        else if (number % 10  === 2 || number % 10  === 3 || number % 10  === 4 ) return 'ванных комнаты'
        else return 'ванных комнат'
      }

      countDigits.forEach((item,index) => { 
        if(index===0) str += `${item.textContent} ${Bedrooms(item.textContent)}, `
        if(index===1) str += `${item.textContent} ${Beds(item.textContent)}, `
        if(index===2) str += `${item.textContent} ${Bathrooms(item.textContent)}`
      
      })
      console.log(str)
    })

    elem.querySelector('.count-prev').addEventListener('click', () => {
      countDropdown--
      countDropdownForClear--
      if (countDropdownForClear <= 0) {
        item.querySelector('.dropdown_rooms__button').innerHTML = `Сколько гостей`
        countDropdownForClear = 0;
      }
      if (countDropdown>0) {
        elem.querySelector('.count-prev').style.opacity = 1
      }
      if (countDropdown<=0) {
        elem.querySelector('.count-prev').style.opacity = 0.38
        elem.querySelector('.count-prev').style.setProperty('pointer-events', 'none')
        countDropdown = 0
      }

    /*(countDropdownForClear === 0) ? item.querySelector('.dropdown_rooms__button').innerHTML = `Количество комнат` : item.querySelector('.dropdown_rooms__button').innerHTML = `${dropdownRoomsButtonTitle( , , )}`*/

      elem.querySelector('.count-digit').textContent = countDropdown
    })
  })
})
