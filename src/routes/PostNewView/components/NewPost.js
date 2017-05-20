//import
import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import Spinner from 'react-spinkit'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

// Component
export default class New extends Component {

    constructor(props, context) {
      super(props, context);
      this.state = {
        show: false,
      };
      this.savePost = this.savePost.bind(this);
    }

    savePost = () => {

        var titlePost = document.getElementById("postTitle").value;
        var bodyPost  = document.getElementById("postBody").value;

        if(titlePost == ""){
          Materialize.toast('Ingresa un título', 2000);
          $("#postTitle").focus();
          return false;
        }
        if(bodyPost == ""){
          Materialize.toast('Escribe algo...', 2000);
          $("#postBody").focus();
          return false;
        }
        this.props.fetchNew(titlePost, bodyPost);

        browserHistory.push('/my-job');


    }

    hiddenAlert = () => {
      this.setState({ show: false });
      this.savePost();
    };

    render () {

        const {fetchNew, new:{fetching, json}} = this.props

        return (
          <section className='white'>
              <div className='container'>
                  <div className='row'>
                    <div className='separate-30'></div>
                    <form className="col s12 m9 l9">
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="postTitle" rows='1' className="titlePost materialize-textarea" placeholder='Ingresa un título'></textarea>
                        </div>
                        <div className="input-field col s12">
                          <textarea id="postBody" className="bodyPost materialize-textarea" placeholder='Escribe algo...'></textarea>
                        </div>
                      </div>
                    </form>

                     <div className="col s12 m3 l3">
                       <div className='form'>
                         <p className='grey-text'>
                           </p>
                         <br/>
                         <div className='form'>
                           <br/>
                           <a className="waves-effect waves-light btn btn-flat white-text blue-grey" onClick={() => this.setState({show:true})}>
                                {fetching ? 'Guardando...' : 'Guardar cambios'}
                           </a>
                         </div>
                       </div>
                       <br/>
                     </div>
                     <SweetAlert
                      show={this.state.show}
                      title="Publicar"
                      text="Al publicar será visible para todos los usuarios de write. ¿estás seguro?"
                      showCancelButton
                      onConfirm={this.hiddenAlert}
                      onCancel={() => {
                        this.setState({ show: false });
                      }}
                    />
                  </div>
              </div>
          </section>
        )
    }
}

New.propTypes = {
  new: React.PropTypes.object.isRequired
}
