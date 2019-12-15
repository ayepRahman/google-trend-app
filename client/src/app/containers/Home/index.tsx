import React, { Suspense } from 'react';
import { Row, Col, Card as AntDCard } from 'antd';
import styled from 'styled-components';
import FullPageLoader from 'app/components/Loaders/FullPageLoader';

const SearchGoogleTrendsAutoComplete = React.lazy(() =>
  import('app/containers/SearchGoogleTrendsAutoComplete')
);
const InterestOverTime = React.lazy(() => import('app/containers/InterestOverTime'));
const InterestByRegion = React.lazy(() => import('app/containers/InterestByRegion'));

const HomeContainer = styled.div`
  padding: 1rem 0;
`;

const Card = styled(AntDCard)`
  margin: 1rem 0 0 !important;
`;

const Home = () => {
  const [selectedValue, setSelectedValue] = React.useState(null);

  console.log(selectedValue);

  return (
    <HomeContainer>
      <Suspense fallback={FullPageLoader}>
        <Row type="flex" justify="center">
          <Col xs={24} md={18}>
            <h1>Google Trends | Explore</h1>
            <SearchGoogleTrendsAutoComplete onSelect={setSelectedValue} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={24} md={18}>
            <Card size="small" title="Interest over time">
              <InterestOverTime />
            </Card>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={24} md={18}>
            <Card size="small" title="Interest by region">
              <InterestByRegion />
            </Card>
          </Col>
        </Row>
      </Suspense>
    </HomeContainer>
  );
};

export default Home;
