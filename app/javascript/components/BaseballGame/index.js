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
    // const possibleOutcomes = ['Ball', 'Strike', 'Swinging strike' 'Foul ball', 'In play, out(s)', 'In play, no out', 'In play, run(s)']
    const possibleOutcomes = ['Ball', 'Strike', 'Swining Strike', 'Foul ball']
    const outcome = this.decideOutcome(possibleOutcomes)
    // console.log(outcome)
    if (outcome === 'Ball') {
        this.handlePitchedBall(outcome);
    }
    else if (outcome === 'Strike' || 'Swining strike') {
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

  resetCount = timeoutMs => {
    setTimeout(() => {
      this.setState({ balls: 0, strikes: 0 })
    }, timeoutMs);
  }

  handleWalk = () => {
    let outcome = 'Batter walked'
    this.setState(prevState => ({
      latestOutcome: outcome, 
      allOutcomes: [...prevState.allOutcomes, outcome]
    }));
    this.resetCount(1000);
  }

  handleOut = outcome => {
    let outs = this.state.outs < 3 ? this.state.outs + 1 : this.state.outs
    this.setState(prevState => ({
      outs: outs,
      latestOutcome: outcome, 
      allOutcomes: [...prevState.allOutcomes, outcome]
    }));

    if (outs === 3) {
      this.handleHalfInningChange();
    }
  }

  handleHalfInningChange = () => {
    console.log('I should be doing something')
    let inningHalf = this.state.inningHalf;
    console.log(inningHalf)
    
    let inning = this.state.inning;
    console.log(inning)
    if (inningHalf === 'Top') {
      inningHalf = 'Bottom';
    } else if (inningHalf === 'Bottom') {
      inningHalf = 'Top';
      inning = inning + 1
    }

    this.setState({ inning: inning, inningHalf: inningHalf, outs: 0 });
  }

  handlePitchedBall = outcome => {
    let balls = this.state.balls < 4 ? this.state.balls + 1 : 0
    this.setState(prevState => ({
        balls: balls,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
      if (balls === 4) {
        this.handleWalk();
      }
    }

  handlePitchedStrike = outcome => {
    console.log(this.state.outs)
    const strikes = this.state.strikes < 3 ? this.state.strikes + 1 : 0
    this.setState(prevState => ({
        strikes: strikes,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
    if (strikes === 3) {
        const message = 'Strike' ? 'Batter strikes out looking' : 'Batter strikes out swinging' 
        this.handleOut(message)
        this.resetCount(1000);
      }
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
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
    this.resetCount(1000);
  }
  
  handleInPlayOuts = outcome => {
    this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
    this.resetCount(1000);
  }

  handleInPlayRuns = outcome => {
    this.setState(prevState => ({
        balls: 0,
        strikes: 0,
        latestOutcome: outcome, 
        allOutcomes: [...prevState.allOutcomes, outcome]
      }));
      this.resetCount(1000);
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