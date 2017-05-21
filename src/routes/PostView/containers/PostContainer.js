// imports
import { connect } from 'react-redux'
import { fetchPost } from '../modules/post'
import Post from '../components/Post'

const mapDispatchtoProps = {
  fetchPost
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, mapDispatchtoProps)(Post)
