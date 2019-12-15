import gql from 'graphql-tag';

export const GET_INTEREST_BY_REGION = gql`
  query GetInterestOverTime($keyword: String!, $resolution: String!) {
    interestByRegion(keyword: $keyword, resolution: $resolution) {
      geoCode
      geoName
      value
    }
  }
`;
