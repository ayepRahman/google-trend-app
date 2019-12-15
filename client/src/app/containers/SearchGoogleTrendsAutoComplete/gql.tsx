import gql from 'graphql-tag';

export const GOOGLE_TRENDS_AUTOCOMPLETE = gql`
  query AutoComplete($keyword: String!) {
    autoComplete(keyword: $keyword) {
      type
      title
      mid
    }
  }
`;
