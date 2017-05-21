// imports
import { connect } from 'react-redux'
import { fetchNew } from '../modules/new'
import New from '../components/NewPost'

const mapDispatchtoProps = {
  fetchNew
}

const mapStateToProps = (state) => ({
  new: state.new
})

export default connect(mapStateToProps, mapDispatchtoProps)(New)
