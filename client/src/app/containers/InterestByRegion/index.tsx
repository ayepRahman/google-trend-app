import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { ResponsiveChoropleth } from '@nivo/geo';
import styled from 'styled-components';
import features from './features';
import { GET_INTEREST_BY_REGION } from './gql';
import Loading from 'app/components/Loaders/Loading';

const InterestByRegionContainer = styled.div`
  height: 500px;
`;

const InterestByRegion = ({ selectedValue }: { selectedValue: string }) => {
  const [geoData, setGeoDate] = React.useState<Array<{ id: string; value: number }>>([
    { id: 'URY', value: 1212 },
  ]);
  const [featuresData, setFeaturesData] = React.useState(features);
  const [getInterestByRegion, { loading, error, data }] = useLazyQuery(GET_INTEREST_BY_REGION, {
    fetchPolicy: 'cache-and-network',
  });

  React.useEffect(() => {
    if (selectedValue) {
      getInterestByRegion({
        variables: {
          keyword: selectedValue,
          resolution: 'COUNTRY',
        },
      });
    }
  }, [selectedValue]);

  React.useEffect(() => {
    if (data) {
      const interestByRegion = data && data.interestByRegion;
      let featuresDateToSet = featuresData;
      const getDateToSet: Array<{ id: string; value: number }> = [];
      for (let i = 0, len = interestByRegion.length; i < len; i++) {
        getDateToSet.push({
          id: interestByRegion[i].geoCode,
          value: interestByRegion[i].value,
        });

        for (let j = 0, leng = featuresDateToSet.length; j < leng; j++) {
          if (featuresDateToSet[j].properties.name === interestByRegion[i].geoName) {
            featuresDateToSet[j].id = interestByRegion[i].geoCode;
          }
        }
      }
      console.log(featuresDateToSet);
      setGeoDate(getDateToSet);
      setFeaturesData(featuresDateToSet);
    }
  }, [data]);

  if (loading) return <Loading />;

  if (!data) return <div>no data :(</div>;

  return (
    <InterestByRegionContainer>
      <ResponsiveChoropleth
        data={geoData}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
      />
    </InterestByRegionContainer>
  );
};

export default InterestByRegion;
