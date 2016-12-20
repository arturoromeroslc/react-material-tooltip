import React, { Component } from 'react';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.state = {isTooltipActive: false};
  }

  handleShowTooltip() {
    this.setState({isTooltipActive: true});
  }
  
  handleHideTooltip() {
    this.setState({isTooltipActive: false});
  }

  render() {
    const isActiveTooltip = this.props.active;

    return (
      <div>
        {isActiveTooltip && this.props.children}
      </div>
    );
  }
}

export default Tooltip;
