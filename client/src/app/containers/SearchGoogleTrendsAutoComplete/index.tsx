import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { AutoComplete as AntDAutoComplete } from 'antd';
import { GOOGLE_TRENDS_AUTOCOMPLETE } from './gql';
import { useDebouncedCallback } from 'use-debounce';
import styled from 'styled-components';

type ISearchOptions = Array<string>;

const AutoComplete = styled(AntDAutoComplete)`
  width: 100%;
`;

const SearchGoogleTrendsAutoComplete = ({
  onSelect,
}: {
  onSelect: (value: any, option: object) => any;
}) => {
  const [options, setOptions] = React.useState<ISearchOptions>([]);
  const [getGoogleAutoComplete, { data }] = useLazyQuery(GOOGLE_TRENDS_AUTOCOMPLETE, {
    fetchPolicy: 'cache-and-network',
  });

  const [debouncedCallback] = useDebouncedCallback(value => {
    getGoogleAutoComplete({ variables: { keyword: value } });
  }, 1000);

  React.useEffect(() => {
    if (data) {
      const autoComplete = data && data.autoComplete;
      if (autoComplete.length > 0) {
        const options: Array<string> = [];
        autoComplete.forEach((data: any) => {
          options.push(data.title);
        });
        setOptions(options);
      }
    }
  }, [data]);

  const onSearch = (value: string) => {
    debouncedCallback(value);
  };

  return (
    <AutoComplete
      dataSource={options}
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="Search trends..."
    />
  );
};

export default SearchGoogleTrendsAutoComplete;
