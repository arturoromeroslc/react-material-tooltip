import React, { Component } from 'react';

class Tooltip extends React.Component {
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
    let tooltip;
    const isActiveTooltip = this.state.isTooltipActive;

    if (isActiveTooltip) {
      tooltip = <p>I am a tooltip</p>;
    } else {
      tooltip = null;
    }

    return (
      <div>
        <span onMouseOver={this.handleShowTooltip} onMouseOut={this.handleHideTooltip} >Hello</span>
        {tooltip}
      </div>
    );
  }
}

export default Tooltip;
