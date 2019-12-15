import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spin />
    </LoadingContainer>
  );
};

Loading.propTypes = {};

export default Loading;
