import React, { Component } from 'react';

class GameDetails extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { inningHalf, inning, outs, balls, strikes } = this.props;
  
      return (
        <div className="game-details">
            <span>Inning: <span className="inning">{`${inningHalf} ${inning}`}</span></span>
            <span>Outs: <span className="outs">{outs}</span></span>
            <span>Balls: <span className="balls">{balls}</span></span>
            <span>Strikes: <span className="strikes">{strikes}</span></span>
        </div>
      );
    }
  }
  
  export { GameDetails };
  


