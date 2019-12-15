import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { ResponsiveChoropleth } from '@nivo/geo';
import styled from 'styled-components';
import features from './features';

const InterestByRegionContainer = styled.div`
  height: 500px;
`;

const InterestByRegion = () => {
  const data = [
    {
      id: 'AFG',
      value: 20,
    },
  ];

  return (
    <InterestByRegionContainer>
      <ResponsiveChoropleth
        data={data}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
      />
    </InterestByRegionContainer>
  );
};

export default InterestByRegion;
