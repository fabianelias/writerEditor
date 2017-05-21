// const
const ID_TOKEN_KEY = 'appSession'
const ID_USER      = 'appIdentifier'
const DATA_USER    = 'appDataSession'

// function Login
export function loginHelper(data) {

  const token   = data.tokenJwt
  const id_user = data.data._id
  const username = data.data.username
  const email    = data.data.email

  const data_user = {
      'appSession' : token,
      'identifier' : id_user,
      'username'   : username,
      'email'      : email
  }

  // save object in localStorage
  localStorage.setItem(ID_TOKEN_KEY, token);
  localStorage.setItem(DATA_USER, JSON.stringify(data_user))

  return true

}

// function isloggedin
export function isLoggedIn() {
  const token = getTokenSession()

  return !!token;

}

// get Token saveSession
function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function getTokenSession() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getInfoUser(){
  const id_user = localStorage.getItem(DATA_USER);

  return id_user;
}

export function logoutHelper() {

    localStorage.removeItem(ID_TOKEN_KEY);
    localStorage.removeItem(DATA_USER);

    return true;

}
