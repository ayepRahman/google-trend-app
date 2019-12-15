//TODO add Scalar Type for startTime, endTime

const typeDefs = `
    type Topic {
      mid: String
      title: String,
      type: String
    }

    type TimeLineData {
      time: String
      formattedTime: String
      formattedAxisTime: String
      value: [Int]
      formattedValue: [String]
    }

    type Query {
      autoComplete(keyword: String!): [Topic!]!
      interestOverTime(keyword: String!): [TimeLineData!]!
      interestByRegion(keyword: String!, startTime: String, endTime: String, resolution: String, geo: String, hl: String, timezone: Int, category: Int): [TimeLineData]
    }

    schema {
      query: Query
    }
`;

export default typeDefs;
