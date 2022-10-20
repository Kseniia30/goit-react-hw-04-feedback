import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { StyledFeedbackOptions } from "components/FeedbackOptions/FeedbackOptions.styled";
import { Notification } from "components/Notification/Notification";
import { Section } from "components/Section/Section";
import { Statistics } from "components/Statistics/Statistics";
import { useEffect, useState } from "react"

export const InterfaceForm = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const state = { good, neutral, bad }

    const countFeedBack = evt => {
        const key = evt.target.textContent
        switch (key) {
            case "good":
                setGood(good => good+1)
                break;
            case "neutral":
                setNeutral(neutral => neutral + 1)
                break;
            case "bad":
                setBad(bad => bad + 1)
                break;
            default:
                return;
        }
    }
    const countTotalFeedback = () => {
        const total = Object.values(state).reduce((prevValue, elem) => { return prevValue + elem }, 0)
        return total
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        const positive = Math.round((100 / total) * good);
        return positive
    }

    useEffect(() => {
    }, [good, neutral, bad])

        return (
            <>
                <Section title="Please leave feedback">
                    <StyledFeedbackOptions>
                        <FeedbackOptions
                        options={Object.keys(state)}
                        onLeaveFeedback={countFeedBack} />
                    </StyledFeedbackOptions>
                </Section>
                <Section title="Statistics">
                    {countTotalFeedback() ?
                        <Statistics
                            goodItem={good}
                            neutralItem={neutral}
                            badItem={bad}
                            total={countTotalFeedback()}
                            positive={countPositiveFeedbackPercentage()} /> :
                        <Notification message="There is no feedback"/>
                    }
                </Section>
            </>
        )
    }
