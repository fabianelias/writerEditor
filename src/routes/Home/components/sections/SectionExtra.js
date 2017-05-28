import React from 'react'
import { Link } from 'react-router'

import Arrow from '../.././assets/_arrow.svg'

export const SectionExtra = () => (
    <section className='deep-purple'>
        <div className='container'>
            <div className='separate-30'></div>
            <div className='row'>
                <div className='col s12 m12 center'>
                  <img src={Arrow}/>
                </div>
            </div>
            <div className='separate-30'></div>
        </div>
    </section>
)

export default SectionExtra
