import React, { Component } from 'react';

class GameLog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allOutcomes } = this.props;
    
    return (
      <section className="game-log">
          <h2>Game Log</h2>
          <ul>
            {
              allOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))
            }
          </ul>
      </section>
    );
  }
}

export { GameLog };

