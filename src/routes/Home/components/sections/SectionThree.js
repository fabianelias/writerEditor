import React from 'react'
import { Link } from 'react-router'

// imports imgs sections
import img1 from '../.././assets/feature1.svg'
import img2 from '../.././assets/feature2.svg'
import img3 from '../.././assets/feature3.svg'

export const SectionThree = () => (
    <section className='white'>
        <div className='container' style={{width:'60%'}}>
            <div className='separate-70'></div>
            <div className='row'>
                <div className='col s12 m3'>
                    <img src={img1}/>
                </div>
                <div className='col s12 m9'>
                  <h4> Llega a más lectores</h4>
                  <h6 style={{lineHeight:'2'}}>
                     Llega a más lectores, escribe y recibe feedback de lectores y escritores como tú.
                  </h6>
                </div>
            </div>
            <div className='separate-70'></div>
            <div className='row'>
                <div className='col s12 m9'>
                  <h4> Llega a más lectores</h4>
                  <h6 style={{lineHeight:'2'}}>
                     Llega a más lectores, escribe y recibe feedback de lectores y escritores como tú.
                  </h6>
                </div>
                <div className='col s12 m3'>
                    <img src={img2}/>
                </div>
            </div>
            <div className='separate-70'></div>
            <div className='row'>
                <div className='col s12 m12 center'>
                    <img src={img3}/>
                </div>
                <div className='col s12 m12 center'>
                  <h4> Llega a más lectores</h4>
                  <h6 style={{lineHeight:'2'}}>
                     Llega a más lectores, escribe y recibe feedback de lectores y escritores como tú.
                  </h6>
                </div>
            </div>
            <div className='separate-100'></div>
        </div>
    </section>
)

export default SectionThree
