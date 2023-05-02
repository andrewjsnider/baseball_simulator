import React, { Component } from 'react';

class ThrowPitchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;
    
    return (
      <section className="pitch-button">
          <button onClick={onClick}>Throw Pitch</button>
      </section>
    );
  }
}

export { ThrowPitchButton };

