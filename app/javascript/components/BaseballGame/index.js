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
    const { balls, strikes, outs, latestOutcome } = this.state;
    const possibleOutcomes = ['Ball', 'Strike', 'Foul ball', 'In play, out(s)', 'In play, no out', 'In play, run(s)']
    const outcome = this.decideOutcome(possibleOutcomes)
    // console.log(outcome)
    if (outcome === 'Ball') {
        this.handlePitchedBall(outcome);
    }
    else if (outcome === 'Strike') {
        this.handlePitchedStrike(outcome);
    }
    else if (outcome === 'Foul ball') {
        this.handleFoulBall(outcome);
    }
    else if (outcome === 'In Play, out(s)') {
        this.handleInPlayOuts(outcome);
    }
    else if (outcome === 'In play, no out') {
        this.handleInPlayNoOut(outcome);
    }
    else if (outcome === 'In play, run(s)') {
        this.handleInPlayRuns(outcome);
    }  
  }

  decideOutcome = possibleOutcomes => {
    const randomIndex = Math.floor(Math.random() * possibleOutcomes.length);
    return possibleOutcomes[randomIndex];
  }

  handlePitchedBall = outcome => {
    this.setState(prevState => ({
        balls: this.state.balls < 4 ? this.state.balls + 1 : 0,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
    }

  handlePitchedStrike = outcome => {
    this.setState(prevState => ({
        strikes: this.state.strikes < 3 ? this.state.strikes + 1 : 0, 
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
  }

  handleFoulBall = outcome => {
    this.setState(prevState => ({
        strikes: this.state.strikes < 2 ? this.state.strikes + 1 : 2,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
  }
  
  handleInPlayNoOut = outcome => {
    this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
  }
  
  handleInPlayOuts = outcome => {
    this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
  }

  handleInPlayRuns = outcome => {
    this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
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

    console.log(allOutcomes)

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