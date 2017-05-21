/**
* Helper Client Api
*/

const api = {}

const path = {
  auth : 'oauth/',
  version : 'v1/'
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
api.myPost = api.url + path.version + 'posts/user/'

// obtener info de un post en particular
api.post = api.url + path.version + 'post/'

// crear un nuevo post
api.new = api.url + path.version + 'post/'

// obtener todos los post para "explore"
api.posts = api.url + path.version + 'posts/'

export default api
