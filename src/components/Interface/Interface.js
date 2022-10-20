import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { StyledFeedbackOptions } from "components/FeedbackOptions/FeedbackOptions.styled";
import { Notification } from "components/Notification/Notification";
import { Section } from "components/Section/Section";
import { Statistics } from "components/Statistics/Statistics";
import { Component } from "react";

export class InterfaceForm extends Component {
    state = { good: 0, neutral: 0, bad: 0 }

    countFeedback = (key) => {
        this.setState((prevState) => (
            {[key]: prevState[key] + 1}
        ))
    }
    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((prevValue, elem) => { return prevValue + elem }, 0)
        return total
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const positive = Math.round((100 / total) * this.state.good);
        return positive
    }
    
    render() {
        const {good, neutral, bad} = this.state
        return (
            <>
                <Section title="Please leave feedback">
                    <StyledFeedbackOptions>
                        <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.countFeedback} />
                    </StyledFeedbackOptions>
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() ?
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positive={this.countPositiveFeedbackPercentage()} /> :
                        <Notification message="There is no feedback"/>
                    }
                </Section>
            </>
        )
    }
}
