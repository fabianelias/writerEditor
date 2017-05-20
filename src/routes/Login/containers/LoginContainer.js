import { connect } from 'react-redux'
import { fetchLogin } from './../modules/login'

import Login from '../components/LoginView'

const mapDispatchtoProps = {
  fetchLogin
}

const mapStateToProps = (state) => ({
  login: state.login
})

export default connect(mapStateToProps, mapDispatchtoProps)(Login)
