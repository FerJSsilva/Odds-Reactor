import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { Button, notification } from 'antd';

import { dispatchUpdateNotification } from '../redux/actions/communication';

class Router extends Component {
  static propTypes = {
    communication: PropTypes.objectOf(PropTypes.any),
    onDispatchNotification: PropTypes.func,
  }

  static defaultProps = {
    communication: {},
    onDispatchNotification: () => {},
  }

  componentDidUpdate() {
    this.openNotificationWithIcon();
  }

  openNotificationWithIcon = () => {
    notification[this.props.communication.notification.type]({
      message: this.props.communication.notification.message,
      description: this.props.communication.notification.description,
    });
  };

  render() {
    return (
      <div >
        <Button onClick={() => this.props.onDispatchNotification({
            type: 'success',
            message: 'Store Updated',
            description: 'Redux is working',
          })}
        >
        Test Redux
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  communication: state.communication,
});

const mapDispatchToProps = {
  onDispatchNotification: dispatchUpdateNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
