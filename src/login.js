import * as mockroblog from './mockroblog.js'

const loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click', async () => {
  const username = document.getElementById('usernameN').value
  const password = document.getElementById('passwordN').value
  const user = await mockroblog.authenticateUser(username, password)
  if (user) {
    if (user.username === username) {
      window.localStorage.setItem('userID', user.id)
      window.localStorage.setItem('username', user.username)
      window.alert('Login succeeded')
      // https://stackoverflow.com/questions/16984943/how-to-get-the-directory-part-of-current-url-in-javascript/16985051
      window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/index.html`)
    }
    // "Omitted error check cause it was breaking something"
  } else {
    window.alert('Login failed.')
  }
})
const registerButton = document.getElementById('registerButton')
registerButton.addEventListener('click', async () => {
  const username = document.getElementById('regUsername').value
  const password = document.getElementById('regPassword').value
  const email = document.getElementById('email').value
  const createdUser = await mockroblog.createUser(username, email, password)

  if (createdUser) {
    window.alert('Account successfully created.')

    window.localStorage.setItem('userID', createdUser.id)
    window.localStorage.setItem('username', createdUser.username)
    window.location.replace(`${document.URL.substr(0, document.URL.lastIndexOf('/'))}/index.html`)
  } else {
    window.alert('Register account failed.')
  }
})

const button3 = document.getElementById('login-link')
button3.addEventListener('click', () => {
  document.getElementById('register-container').hidden = true
  document.getElementById('login-container').hidden = false
})

const button4 = document.getElementById('signup-link')
button4.addEventListener('click', () => {
  document.getElementById('register-container').hidden = false
  document.getElementById('login-container').hidden = true
})
