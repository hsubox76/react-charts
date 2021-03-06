import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chart extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.node
  };
  static defaultProps = {
    width: 400,
    height: 400
  };
  render() {
    return (
        <svg width={this.props.width} height={this.props.height}>
          {this.props.children}
        </svg>
    );
  }
}

export default Chart;
