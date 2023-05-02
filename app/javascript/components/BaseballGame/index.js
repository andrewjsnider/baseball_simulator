import React, { Component } from 'react';
import { Scoreboard } from '../Scoreboard';
import { PitchOutcomeDisplay } from '../PitchOutcomeDisplay';
import { ThrowPitchButton } from '../ThrowPitchButton';
import { GameLog } from '../GameLog';


class BaseballGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balls: 0,
      strikes: 0,
      outs: 0,
      inningHalf: 'Top',
      inning: 1,
      runsAway: 0,
      runsHome: 0,
      latestOutcome: '',
      allOutcomes: ['Play Ball!'],
    };
  }

  throwPitch = () => {
    console.log('I throwed a pitch')
  }

  render() {
    const { 
        balls,
        strikes,
        outs,
        inningHalf,
        inning,
        runsAway,
        runsHome,
        latestOutcome,
        allOutcomes
    } = this.state;

    return (
        <>
            <Scoreboard 
                balls={balls}
                strikes={strikes}
                outs={outs}
                inningHalf={inningHalf}
                inning={inning}
                runsAway={runsAway}
                runsHome={runsHome}
            />
            <PitchOutcomeDisplay latestOutcome={latestOutcome}/>
            <ThrowPitchButton onClick={this.throwPitch}/>
            <GameLog allOutcomes={allOutcomes} />
        </>
    );
  }
}

export { BaseballGame };