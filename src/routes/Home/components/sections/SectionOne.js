import React from 'react'
import { Link } from 'react-router'

// imports imgs sections
import HomeImgSection1 from '../.././assets/hme.svg'

// const section one
export const SectionOne = () => (
  <section className='white sectionOne'>
      <div className="container">
        <div className='separate-100 hide-on-small-only'></div>
          <div className='row'>
              <div className='col s12 m5 l5'>
                  <div className='separate-70'></div>
                  <h4 className='left deep-purple-text font-weight-600'>
                    Escribir, leer y publicar
                  </h4>
                  <h5 className='left font-weight-300 letra-15 grey-text'>
                    Escribir, leer y publicar historias ahora
                    más fácil.<br/>
                    Crea tu cuenta en simples pasos y comienza
                    a <br/>escribir tus historias.
                    <br/>
                    <br/>
                    <Link to='/login' className='btn btn-flat blue-grey white-text letra-12 font-weight-300'>
                      Comenzar
                    </Link>
                  </h5>
              </div>
              <div className='col s12 m7 l7'>
                  <img className='section-uno' src={HomeImgSection1} />
              </div>
          </div>
          <div className='separate-100'></div>
      </div>
  </section>
)

// exports
export default SectionOne
