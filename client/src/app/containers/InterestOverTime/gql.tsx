import gql from 'graphql-tag';

export const GET_INTEREST_OVER_TIME = gql`
  query GetInterestOverTime($keyword: String!) {
    interestOverTime(keyword: $keyword) {
      time
      formattedTime
      formattedValue
      value
    }
  }
`;
