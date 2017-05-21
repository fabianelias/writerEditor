// imports
import React, { Component } from 'react'
import { Link } from 'react-router'
import Spinner from 'react-spinkit'

//images
import exploreImg from './assets/explore.svg'

export default class Explore extends Component {

    componentWillMount(){
      this.props.fetchExplore();
    }

    render () {
        const {fetchExplore, explore:{fetching, json}} = this.props

        return (
          <section className='white'>
              <div className='container'>
                  <div className='row'>

                    <div className='border-post center col s12 m12'>
                        <h5 className='font-weight-300' style={{color:'#8392A6'}}>
                          <img className='hide' src={exploreImg}/> Explora
                          { fetching ?
                          <Spinner spinnerName='three-bounce' /> : ''
                          }
                      </h5>
                    </div>

                    <div className='col s12 l8 m8'>
                      {
                        !json ?
                        <h5 className='center font-weight-300 letra-18 grey-text'>Todavía no has creado tu primer trabajo!</h5>
                        :
                        json.map(item => (
                        <div className='col s12 border-post' key={item._id}>
                          <div className='col s8 m10 l10'>
                            <h1>
                              <Link to={'post/'+item._id} className='black-text'>
                                { item.title }
                              </Link>
                            </h1>
                          </div>
                          <div className='col s12 m12 l12'>
                            <h6 className='font-weight-300 grey-text'>by <i>{item._creator.username}</i></h6>
                            <p className='letra-15 font-weight-300 postBodyText'>{item.postBody.substring(0, 150)} <Link to={'post/'+item._id} className='deep-purple-text'>
                              ...seguir leyendo
                            </Link></p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='center col s12 m4 l4'>
                      <div className='separate-70'></div>

                      <h1 className='font-weight-300 letra-15 grey-text'>Inspirate y pública tu talento.</h1>
                    </div>
                  </div>
              </div>
          </section>
        )
    }

}

Explore.propTypes = {
  explore: React.PropTypes.object.isRequired
}
