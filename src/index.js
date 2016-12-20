import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';
import './index.css';

class Outside extends Component {
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
  	return (
   		<div onMouseEnter={this.handleShowTooltip} onMouseLeave={this.handleHideTooltip}>Outside
	    	<Tooltip active={ this.state.isTooltipActive }>I am a child Tooltip</Tooltip>
    	</div>
  	)
  }
}

ReactDOM.render(
  <Outside/>,
  document.getElementById('root')
);
