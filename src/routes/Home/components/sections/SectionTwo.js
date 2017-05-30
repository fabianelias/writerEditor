import React from 'react'
import { Link } from 'react-router'

// imports imgs sections
import search from '../.././assets/_search.svg'

export const SectionTwo = () => (
    <section className='white lighten-4'>
        <div className='container border-post'>
            <div className='separate-70'></div>
            <div className='row'>
              <div className="row center">
                <div className='col s12 m12 l12 center'>
                  <img className='' src={search}/>
                </div>
                <div className="col s2">
                </div>
                <div className="col s8">
                  <h3>El poder está en tus manos</h3>
                  <h6 style={{lineHeight:'2'}}>
                    GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.
                  </h6>
                  <br/>
                  <Link to='/login' className='btn  white-text letra-15 font-weight-300'>
                    Comenzar
                  </Link>
                </div>
                <div className="col s2">
                </div>
              </div>
            </div>
            <div className='separate-30'></div>
        </div>
    </section>
)

export default SectionTwo
