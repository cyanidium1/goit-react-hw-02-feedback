import React, { Component } from 'react';
import css from './Feedback.module.css';
import Stats from 'components/Stats/Stats';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class MyClassComponent extends Component {
  state = {
    good: null,
    neutral: null,
    bad: null,
  };

  incGood = () => {
    console.log('be');
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
      <div className={css.container}>
        <FeedbackOptions
          good={this.incGood}
          neutral={this.incNeutral}
          bad={this.incBad}
        />
        <h2>Stats</h2>
        <Stats
          props={{
            good: this.state.good,
            neutral: this.state.neutral,
            bad: this.state.bad,
          }}
        />
      </div>
    );
  }
}

export default MyClassComponent;
