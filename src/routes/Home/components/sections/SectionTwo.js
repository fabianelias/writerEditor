import React from 'react'
import { Link } from 'react-router'

// imports imgs sections
import feature1 from '../.././assets/feature-1.svg'
import feature2 from '../.././assets/feature-2.svg'
import feature3 from '../.././assets/feature-3.svg'

export const SectionTwo = () => (
    <section className='grey lighten-4'>
        <div className='container'>
            <div className='separate-70'></div>
            <div className='row'>
              <div className="row center">
                <div className="col s4">
                   <img className='' src={feature1}/>
                </div>
                <div className="col s4">
                  <img className='' src={feature2}/>
                </div>
                <div className="col s4">
                  <img className='' src={feature3}/>
                </div>
              </div>
            </div>
            <div className='separate-70'></div>
        </div>
    </section>
)

export default SectionTwo
