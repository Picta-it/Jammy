import React, { PropTypes } from 'react';
import {
  Step,
  Stepper,
  StepLabel
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AssisteurIssueFirst from '../AssisteurIssueFirst';
import AssitantIssueLogements from '../AssitantIssueLogements';
import AssitantIssueDeplacement from '../AssitantIssueDeplacement';

export default class AssisteurIssue extends React.Component {

  state = {
    finished: false,
    stepIndex: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  static propTypes = {
    onValidation: PropTypes.func.isRequired
  };

  getStepContent (stepIndex) {
    switch (stepIndex) {
      case 0:
        return <AssisteurIssueFirst />;
      case 1:
        return <AssitantIssueLogements />;
      case 2:
        return <AssitantIssueDeplacement />;
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render () {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    return (
      <div style={{ width: '100%', margin: '0' }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Saisie incident</StepLabel>
          </Step>
          <Step>
            <StepLabel>Choix du logement</StepLabel>
          </Step>
          <Step>
            <StepLabel>Choix du déplacement</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href='#'
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({ stepIndex: 0, finished: false });
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div style={{ textAlign: 'right' }}>
              <div style={{ marginBottom: 12 }}>
                <FlatButton
                  label='Back'
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{ marginRight: 12 }}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary
                  onTouchTap={this.handleNext}
                />
              <div style={{ textAlign: 'left' }}>
                {this.getStepContent(stepIndex)}
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
