// imports
import React, { Component } from 'react'
import { Link } from 'react-router'
import Spinner from 'react-spinkit'
// imports imgs sections
import ImgNoticias from './assets/Writing.svg'
import deleteJob from './assets/delete.svg'

export default class Myjob extends Component {

    componentWillMount(){
      this.props.fetchJob();
    }

    render () {
        const {fetchJob, job:{fetching, json}} = this.props

        return (
          <section className='white'>
              <div className='container'>
                  <div className='row'>
                      <div className='col s12 m12'>
                          <h4 className='letra-18 font-weight-300'>
                            { fetching ?
                            <Spinner spinnerName='three-bounce' /> : ''
                            }
                        </h4>
                      </div>
                  </div>
                  <div className='row'>
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
                          <div className='col s4 m2 l2'>
                            <img className='deleteJob tooltipped' src={deleteJob} data-position="bottom" data-delay="50" data-tooltip="I am tooltip"/>
                          </div>
                          <div className='col s12 m12 l12'>
                            <h6 className='font-weight-300 grey-text'>by <i>{item._creator.username}</i></h6>
                            <p className='letra-15 font-weight-300'>{item.postBody}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='center col s12 m4 l4'>
                      <div className='separate-70'></div>
                      <img className='section-noticias' src={ImgNoticias} />
                      <h1 className='font-weight-300 letra-15 grey-text'>Inspirate y pública tu talento.</h1>
                    </div>
                  </div>
              </div>
          </section>
        )
    }

}

Myjob.propTypes = {
  job: React.PropTypes.object.isRequired
}
