import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SocialIcon extends Component {
  state = {
    isHover: false,
  };
  handleMouseEnter = () => {
    this.setState({ isHover: true });
  };
  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };
  render() {
    const { icon } = this.props;
    const { isHover } = this.state;
    const color = isHover ? '#666' : '#acacac';
    return (
      <FontAwesomeIcon
        style={{
          marginLeft: 5,
          marginRight: 5,
          color,
        }}
        size="lg"
        icon={icon}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    );
  }
}
