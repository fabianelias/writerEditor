import { connect } from 'react-redux'
import { fetchJob, deleteJob } from '../modules/myjob'

import Myjob from '../components/MyJob'

const mapDispatchtoProps = {
  fetchJob,
  deleteJob,
}

const mapStateToProps = (state) => ({
  job: state.job
})

export default connect(mapStateToProps, mapDispatchtoProps)(Myjob)
