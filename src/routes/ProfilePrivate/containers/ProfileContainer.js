// imports
import { connect } from 'react-redux'
import { fetchProfile, putProfile } from '../modules/profile'
import Profile  from '../components/Profile'

const mapDispatchtoProps = {
  fetchProfile,
  putProfile,
}

const mapStateToProps = (state) => ({
  profile : state.profile
})

export default connect(mapStateToProps, mapDispatchtoProps)(Profile)
