const logInBtn = document.querySelector('#login')
const signUpBtn = document.querySelector('#signup')
const mainNav = document.querySelector('.header__container')
console.log(mainNav)
logInBtn.addEventListener('click', () => {
  logInBtn.style.display = 'none'
  signUpBtn.style.display = 'none'
  const verticalLine = document.createElement('div');
  verticalLine.style = `width: 1px; 
  background-color: rgba(31, 32, 65, 0.1); 
  height: 45px; 
  float: left;`
  mainNav.appendChild(verticalLine)

  const userName = document.createElement('div');
  userName.textContent = `User Name`
  mainNav.appendChild(userName)
})

const footerSublistItemLastChild = document.querySelectorAll('.footer-sublist > li')
footerSublistItemLastChild[footerSublistItemLastChild.length-1].style = 'padding-bottom: 0'