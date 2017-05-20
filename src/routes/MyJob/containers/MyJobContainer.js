import { connect } from 'react-redux'
import { fetchJob } from '../modules/myjob'

import Myjob from '../components/MyJob'

const mapDispatchtoProps = {
  fetchJob,
}

const mapStateToProps = (state) => ({
  job: state.job
})

export default connect(mapStateToProps, mapDispatchtoProps)(Myjob)
