// imports
import { connect } from 'react-redux'
import { fetchPost, putComment } from '../modules/post'
import Post from '../components/Post'

const mapDispatchtoProps = {
  fetchPost,
  putComment,
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, mapDispatchtoProps)(Post)
