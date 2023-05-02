import React, { Component } from 'react';
import { ScoreBox } from './ScoreBox';
import { GameDetails } from './GameDetails';


class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { balls, strikes, outs, runsHome, runsAway, inning, inningHalf } = this.props;

    return (
        <section className="scoreboard">
            <ScoreBox runsAway={runsAway} runsHome={runsHome} />
            <GameDetails 
                balls={balls}
                strikes={strikes}
                outs={outs}
                inning={inning}
                inningHalf={inningHalf}
            />   
        </section>
    );
  }
}

export { Scoreboard };


