import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useLazyQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const InterestOverTimeContainer = styled.div`
  height: 500px;
`;

const InterestOverTime = () => {
  const data = [
    {
      id: 'japan',
      color: 'hsl(131, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 281,
        },
        {
          x: 'helicopter',
          y: 228,
        },
        {
          x: 'boat',
          y: 95,
        },
        {
          x: 'train',
          y: 265,
        },
        {
          x: 'subway',
          y: 11,
        },
        {
          x: 'bus',
          y: 125,
        },
        {
          x: 'car',
          y: 47,
        },
        {
          x: 'moto',
          y: 141,
        },
        {
          x: 'bicycle',
          y: 294,
        },
        {
          x: 'horse',
          y: 63,
        },
        {
          x: 'skateboard',
          y: 205,
        },
        {
          x: 'others',
          y: 133,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(145, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 197,
        },
        {
          x: 'helicopter',
          y: 24,
        },
        {
          x: 'boat',
          y: 139,
        },
        {
          x: 'train',
          y: 201,
        },
        {
          x: 'subway',
          y: 40,
        },
        {
          x: 'bus',
          y: 233,
        },
        {
          x: 'car',
          y: 216,
        },
        {
          x: 'moto',
          y: 171,
        },
        {
          x: 'bicycle',
          y: 268,
        },
        {
          x: 'horse',
          y: 51,
        },
        {
          x: 'skateboard',
          y: 234,
        },
        {
          x: 'others',
          y: 107,
        },
      ],
    },
    {
      id: 'us',
      color: 'hsl(22, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 83,
        },
        {
          x: 'helicopter',
          y: 200,
        },
        {
          x: 'boat',
          y: 33,
        },
        {
          x: 'train',
          y: 83,
        },
        {
          x: 'subway',
          y: 236,
        },
        {
          x: 'bus',
          y: 170,
        },
        {
          x: 'car',
          y: 188,
        },
        {
          x: 'moto',
          y: 74,
        },
        {
          x: 'bicycle',
          y: 54,
        },
        {
          x: 'horse',
          y: 140,
        },
        {
          x: 'skateboard',
          y: 181,
        },
        {
          x: 'others',
          y: 265,
        },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(86, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 195,
        },
        {
          x: 'helicopter',
          y: 90,
        },
        {
          x: 'boat',
          y: 154,
        },
        {
          x: 'train',
          y: 269,
        },
        {
          x: 'subway',
          y: 300,
        },
        {
          x: 'bus',
          y: 264,
        },
        {
          x: 'car',
          y: 243,
        },
        {
          x: 'moto',
          y: 235,
        },
        {
          x: 'bicycle',
          y: 206,
        },
        {
          x: 'horse',
          y: 186,
        },
        {
          x: 'skateboard',
          y: 181,
        },
        {
          x: 'others',
          y: 111,
        },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(292, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 151,
        },
        {
          x: 'helicopter',
          y: 259,
        },
        {
          x: 'boat',
          y: 228,
        },
        {
          x: 'train',
          y: 254,
        },
        {
          x: 'subway',
          y: 191,
        },
        {
          x: 'bus',
          y: 226,
        },
        {
          x: 'car',
          y: 245,
        },
        {
          x: 'moto',
          y: 247,
        },
        {
          x: 'bicycle',
          y: 52,
        },
        {
          x: 'horse',
          y: 204,
        },
        {
          x: 'skateboard',
          y: 16,
        },
        {
          x: 'others',
          y: 142,
        },
      ],
    },
  ];

  return (
    <InterestOverTimeContainer>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
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
