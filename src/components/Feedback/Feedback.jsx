import React, { Component } from 'react';
import Button from 'components/Button/Button';
import css from './Feedback.module.css';
import Stats from 'components/Stats/Stats';

class MyClassComponent extends Component {
  state = {
    good: null,
    neutral: null,
    bad: null,
    percentage: null,
    total: null,
    average: null,
  };

  incGood = () => {
    this.setState({
      good: this.state.good + 1,
      total: this.state.total + 1,
      percentage: this.state.percentage + 100,
      average: Math.round(
        (this.state.percentage + 100) / (this.state.total + 1)
      ),
    });
  };

  incNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
      total: this.state.total + 1,
      percentage: this.state.percentage + 50,
      average: Math.round(
        (this.state.percentage + 50) / (this.state.total + 1)
      ),
    });
  };

  incBad = () => {
    this.setState({
      bad: this.state.bad + 1,
      total: this.state.total + 1,
      average: Math.round(this.state.percentage / (this.state.total + 1)),
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h2>Okay, leave feedback</h2>
        <div className={css.buttons}>
          <Button name="good" action={this.incGood} />
          <Button name="neutral" action={this.incNeutral} />
          <Button name="bad" action={this.incBad} />
        </div>
        <h2>Stats</h2>
        <Stats
          props={{
            good: this.state.good,
            neutral: this.state.neutral,
            bad: this.state.bad,
            total: this.state.total,
            average: this.state.average,
          }}
        />
      </div>
    );
  }
}

export default MyClassComponent;
