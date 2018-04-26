import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/actions/posts';

class Sample extends Component {
  static propTypes = {
    posts: PropTypes.objectOf(PropTypes.any),
    onFetchPosts: PropTypes.func.isRequired,
  };

  static defaultProps = {
    posts: {},
  };

  componentWillMount() {
    this.props.onFetchPosts();
  }

  renderPosts = () => {
    const posts = this.props.posts.ids.map(id => (
      <div key={id}>
        <h3>{this.props.posts.content[id].title}</h3>
        <p>{this.props.posts.content[id].body}</p>
        <hr />
      </div>
    ));
    return posts;
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

/**
* @description Map the state from redux store to the component props
* @param {Object} state The state from redux store
* @returns {Object} The object which will be appended to props
*/
const mapStateToProps = ({ posts }) => ({
  posts,
});

/**
* @description Map the functions which will be dispatched to redux reducers to the component props
*/
const mapDispatchToProps = {
  onFetchPosts: fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
