import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { GET_INTEREST_OVER_TIME } from './gql';
import { fromUnixTime, format } from 'date-fns';
import Loading from 'app/components/Loaders/Loading';

const InterestOverTimeContainer = styled.div`
  height: 500px;
`;

type ILineData = Array<{ id: string; color: string; data: Array<{ x: string; y: number }> }>;

const InterestOverTime = ({ selectedValue }: { selectedValue: string }) => {
  const [lineData, setLineData] = React.useState<ILineData>([
    { id: 'Examples', color: '#0ED2AC', data: [{ x: 'Test', y: 1 }] },
  ]);
  const [getInterestOverTime, { loading, error, data }] = useLazyQuery(GET_INTEREST_OVER_TIME, {
    fetchPolicy: 'cache-and-network',
  });

  React.useEffect(() => {
    if (selectedValue) {
      getInterestOverTime({
        variables: {
          keyword: selectedValue,
        },
      });
    }
  }, [selectedValue]);

  React.useEffect(() => {
    if (data) {
      const interestOverTime = data && data.interestOverTime;
      const dataToSet: Array<{ x: string; y: number }> = [];
      for (let i = 0, len = interestOverTime.length; i < len; i++) {
        dataToSet.push({
          x: format(fromUnixTime(interestOverTime[i].time), 'd/L/yy'),
          y: interestOverTime[i].value[0],
        });
      }

      setLineData([{ id: selectedValue, color: '#0ED2AC', data: dataToSet }]);
    }
  }, [data]);

  if (loading) return <Loading />;

  if (!data) return <div>no data :(</div>;

  return (
    <InterestOverTimeContainer>
      <ResponsiveLine
        data={lineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        enableGridX={false}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Date',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Search Count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'nivo' }}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </InterestOverTimeContainer>
  );
};

export default InterestOverTime;
