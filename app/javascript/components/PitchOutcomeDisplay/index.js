import React, { Component } from 'react';

class PitchOutcomeDisplay extends Component {
  constructor(props) {
    super(props);
    this.latestOutcome = props.latestOutcome || 'Click the button to throw a pitch!'
  }

  render() {
    return (
        <section className="pitch-outcome-display">
            <h2>Pitch Outcome</h2>
            <p className="outcome">{this.latestOutcome}</p>
        </section>
    );
  }
}

export { PitchOutcomeDisplay };

