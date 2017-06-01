// import
import React, { Component } from 'react'


// componente
class Profile extends Component {
  componentDidMount(){
    this.props.fetchProfile();
  }
  render() {
    const  { fetchProfile, profile:{fetching, json}} = this.props
    return (
      <div>
        <section className='white' style={{marginTop:'0px'}}>
          <div className='container center'>
            <div className='separate-30'></div>
            <h1 className=' letra-18 font-weight-300'>Editar mi información</h1>
            <div className='separate-30'></div>
          </div>
        </section>
        <section className='white'>
          <div className='container'>
            <div className='row'>
              <div className='separate-30'></div>
              <div className='col s12 m3 l3'></div>
              <div className='col s12 m6 l6'>
                {
                  json.map(profile => (
                <div className="row" key={profile._id}>
                  <div className="input-field col s12">
                    <input defaultValue={profile.username} id="first_name2" type="text" className="validate" />
                    <label className="active">Seudónimo</label>
                  </div>
                  <div className="input-field col s12">
                    <input defaultValue={profile.name}  id="first_name2" type="text" className="validate" />
                    <label className="active">Nombre completo</label>
                  </div>
                  <div className="input-field col s12">
                    <input disabled defaultValue={profile.email} id="first_name2" type="text" className="validate" />
                    <label className="active">email</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea validate" defaultValue="hi!"></textarea>
                    <label className="active">Biografía</label>
                  </div>
                  <div className="input-field col s12 center">
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                      Guardar cambios
                    </button>
                  </div>
                </div>
                ))
              }
              </div>
              <div className='col s12 m3 l3'></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

Profile.propTypes = {
  profile: React.PropTypes.object.isRequired
}

export default Profile
