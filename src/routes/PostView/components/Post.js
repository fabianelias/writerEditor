// import
import React, { Component } from 'react'
import { Link } from 'react-router'
import Spinner from 'react-spinkit'

// import
import commentImg from './assets/comment.svg'

// Component
class Post extends Component {
    componentDidMount(){
      var identifier_post = this.props.params.identifierPost
      this.props.fetchPost(identifier_post);
    }
    commentPost = () => {
      var bodyComment = document.getElementById("commentNew").value;
      var identifier_post = this.props.params.identifierPost;

      this.props.putComment(bodyComment,identifier_post)
      $("#commentNew").val('');
    }
    render () {
        const {fetchPost, post:{fetching, json}} = this.props

        return (
            <section className='white'>
              {
                json.map(post => (
                <div className='container' key={post._id} id="post">
                    <div className='row'>
                        <div className='col s12 m12'>
                          <div className='separate-30'></div>
                            <h4 className='center letra-18 font-weight-300'>
                              { fetching ?
                              <Spinner spinnerName='three-bounce' /> : ''
                              }
                          </h4>
                        </div>
                    </div>
                    <div className='row'>
                      <div className='col s12 m2 l2 grey-text font-weight-300'>
                        <div className='separate-70'></div>
                          Escrito por <i className='letra-18 black-text'>{post._creator.username}</i>
                        <div>
                          <br/>
                          <span className="new tags  deep-purple">Poesia</span>
                        </div>
                      </div>
                      <div className='col s12 l9 m9'>
                        {
                          !post ? <h5 className='center font-weight-300 letra-18 grey-text'>Ha ocurrido en un error!, intentelo nuevamente.</h5>:
                          <div className='border-post'>
                            <h1 className='letra-40 font-weight-600'>{post.title}</h1>
                            <div className='postBodyText letra-18 font-weight-300'>
                                {post.postBody}
                            </div>
                            <div className='separate-30'></div>
                          </div>
                        }
                      </div>
                      <div className='center col s12 l12 m12'>
                        <div className='separate-70'></div>
                          <div className='col s12 m3 l3'></div>
                          <div className='col s12 m6 l6'>
                            <div className=''>
                              <textarea id="commentNew" className="materialize-textarea" placeholder='Escribe un comentario...'></textarea>
                              <br/>
                              <a className='btn btn-flat blue-grey white-text' onClick={this.commentPost}>Comentar</a>
                            </div>
                            <h5 className='font-weight-300' style={{color:'#8392A6'}}>Comentarios. <img src={commentImg}/></h5>
                              {
                                post._comments ?
                                  post._comments.map(comment => (
                                    <div className='' key={comment._id}>
                                        <div className='col s12 m12 l12 left comment-post'>
                                          <h6 className='font-weight-600 left-text'>por <i>{comment._creator.username}</i></h6>
                                            <span className="font-weight-300 grey-text">{comment.text}</span>
                                        </div>
                                    </div>

                                  ))
                                  :  <h5>Sin comentarios</h5>

                              }
                          </div>
                        <div className='col s12 m3 l3'></div>
                      </div>
                    </div>
                </div>
              ))
            }
            </section>
        )
    }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
}

export default Post
