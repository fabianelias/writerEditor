/**
* Helper Client Api
*/

const api = {}

const path = {
  auth : 'oauth/',
  v1 : 'v1/'
}
/**
* config api local
*/
api.url = 'http://localhost:8000/'
//api.url = 'https://api.writer.cl/';

/*
 * EndPoints (Rutas)
 */

// login
api.login = api.url + path.auth +'login/'

// obtener post de mi cuenta
api.myPost = api.url + path.v1 + 'posts/user/'

// obtener info de un post en particular
api.post = api.url + path.v1 + 'post/'

// crear un nuevo post
api.new = api.url + path.v1 + 'post/'


export default api
