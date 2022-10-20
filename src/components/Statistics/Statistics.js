
import { StyledStaticticsItem, StyledStatisticsList, StyledStatisticsSpan } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({ goodItem, neutralItem, badItem, total, positive }) => {
    return (
        <StyledStatisticsList>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Good:   </StyledStatisticsSpan> 
                {goodItem}
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Neutral:   </StyledStatisticsSpan> 
                {neutralItem}
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Bad:   </StyledStatisticsSpan> 
                {badItem}
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Total:   </StyledStatisticsSpan> 
                {total }
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Positive feedback:   </StyledStatisticsSpan> 
                { positive} %
            </StyledStaticticsItem>
        </StyledStatisticsList>
    )
}

Statistics.propTypes = {
    goodItem: PropTypes.number.isRequired,
    neutralItem: PropTypes.number.isRequired,
    badItem: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
}