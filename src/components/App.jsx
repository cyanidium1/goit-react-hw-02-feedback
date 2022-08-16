import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: null,
    neutral: null,
    bad: null,
  };

  incGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  incNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  incBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  render() {
    return (
      <Feedback
        incGood={this.incGood}
        incNeutral={this.incNeutral}
        incBad={this.incBad}
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
      />
    );
  }
}
