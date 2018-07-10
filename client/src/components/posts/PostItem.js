import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div>
        <p>{post.name}</p>
        <p>{post.text}</p>
        {showActions ? (
          <span>
            <button
              onClick={this.onLikeClick.bind(this, post._id)}
              type="button"
            >
              <i
                className={classnames({
                  'text-info': this.findUserLike(post.likes)
                })}
              />
              <span>{post.likes.length} Like</span>
            </button>
            <button
              onClick={this.onUnlikeClick.bind(this, post._id)}
              type="button"
            >
              <i /> Dislike
            </button>
            <Link to={`/post/${post._id}`}>Comments</Link>
            {post.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, post._id)}
                type="button"
              >
                <i />Delete
              </button>
            ) : null}
          </span>
        ) : null}
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  removeLike: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
