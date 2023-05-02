import React from "react"
import PropTypes from "prop-types"
import { BaseballGame } from "./BaseballGame"

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BaseballGame />
      </React.Fragment>
    );
  }
}

export default App
