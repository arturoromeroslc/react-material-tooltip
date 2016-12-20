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
    const isActiveTooltip = this.state.isTooltipActive;

    return (
      <div>
        <span onMouseOver={this.handleShowTooltip} onMouseOut={this.handleHideTooltip} >Hello</span>
        {isActiveTooltip && this.props.children}
      </div>
    );
  }
}

export default Tooltip;
