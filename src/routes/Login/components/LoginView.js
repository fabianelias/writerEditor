import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Spinner from 'react-spinkit'

// import helpers
import { loginHelper, isLoggedIn } from '.././../../helpers/AuthService';

export default class Login extends Component {
  constructor (props) {
     super(props);
  }

  login(e) {
    e.preventDefault();
    var ele = $(e.target);

    var emailVal    = ele.find("#email").val();
    var password    = ele.find("#password").val();

    /* validaciones */

    // validación email
    if(emailVal == ""){
      Materialize.toast('Ingresa tu email', 2000);
      ele.find("#email").focus();
      return false;
    }

    // validación password
    if(password == ""){
      Materialize.toast('Ingresa tu contraseña', 2000);
      ele.find("#password").focus();
      return false;
    }
    const data = JSON.stringify({
     email: emailVal,
     password: password
   });

   return fetch('http://localhost:8000/oauth/' + 'login',{
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: data
       })
       .then( (resp) => {
         return  resp.json();
       })
       .then( (response) => {

         if(response.status == true) {
           const saveSession = loginHelper(response);
           if(saveSession == true){
              browserHistory.push('/explore');
              Materialize.toast('Bienvenido ' + response.data.username + '!', 3000);
           }else{
              Materialize.toast('Ocurrio un error intentelo nuevamente.', 2000);
              return false;
           }
         } else {
            Materialize.toast(response.message, 2000);
            return false;
         }
       //
       })
       .catch( (err) => {
         return err;
       });
  }
  render () {
      const { fetchLogin, login: {fetching, json} } = this.props

      return (
        <section className='white'>
            <div className='container'>
                <div className='separate-100'></div>
                <div className='row'>
                    <div className='col s12 m4'></div>
                    <div className='col s12 m4'>
                      <form onSubmit={this.login}>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="email" type="email" className="validate"  placeholder="Ingresa tu email"/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input id="password" type="password" className="validate" placeholder="Ingresa tu contraseña"/>
                            </div>
                          </div>
                          <div className="row center">
                            <button className="blue-grey btn waves-effect waves-light letra-12" type="submit" name="action">
                              {fetching ? 'Espere...' : 'Comenzar'}
                             </button>
                          </div>
                      </form>
                    </div>
                    <div className='col s12 m4'></div>
                </div>
                <div className='separate-100'></div>
            </div>
        </section>
      )
  }
}
Login.propTypes = {
  login: React.PropTypes.object.isRequired
}
