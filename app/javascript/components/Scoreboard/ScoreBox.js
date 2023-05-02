import React, { Component } from 'react';

class ScoreBox extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { runsHome, runsAway } = this.props;
  
      return (
        <div className="score">
            <span className="team">Home: </span><span className="runs">{runsHome}</span>
            <span className="team">Away: </span><span className="runs">{runsAway}</span>
        </div>
      );
    }
  }
  
  export { ScoreBox };
  

