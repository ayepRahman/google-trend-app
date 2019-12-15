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

    type Coodinates {
      lat: Int,
      lng: Int
    }

    type GeoMap {
      coordinates: Coodinates
      geoCode: String
      geoName: String
      value: [Int]
      formattedValue: [String]
      maxValueIndex: Int
      hasData: Boolean
    }

    type Query {
      autoComplete(keyword: String!): [Topic!]!
      
      #keyword - required - type string or array - the search term(s) of interest
      #startTime - optional - type Date object - the start of the time range of interest (defaults to new Date('2004-01-01') if not supplied)
      #endTime - optional - type Date object - the end of the time range of interest (defaults to new Date(Date.now()) if not supplied)
      #geo - optional - type string or array - geocode(s) for a country, region, or DMA depending on the granularity required (defaults to worldwide). For example, geo: 'US-CA-800' will target the Bakersfield, California, United States or geo: 'US' will just target the US. Passing geo: ['US-CA, US-VA'], keyword: ['wine', 'peanuts'] will search for wine in California and peanuts in Virginia.
      #hl - optional - type string - preferred language code for results (defaults to english)
      #timezone - optional - type number - preferred timezone (defaults to the time zone difference, in minutes, from UTC to current locale (host system settings))
      #category - optional - type number - a number corresponding to a particular category to query within (defaults to all categories), see the category wiki for a complete list
      #granularTimeResolution - optional - type boolean - if true, will try to return results to a finer time resolution (only relevant for startTime and endTime less than one week)
     
      interestOverTime( keyword: String!, 
        startTime: String, 
        endTime: String, 
        geo: String, 
        hl: String, 
        timezone: Int, 
        category: Int,
        granularTimeResolution: Boolean
      ): [TimeLineData!]!
      interestByRegion(
        keyword: String!, 
        startTime: String, 
        endTime: String, 
        resolution: String, 
        geo: String, 
        hl: String, 
        timezone: Int, 
        category: Int
      ): [GeoMap]
    }

    schema {
      query: Query
    }
`;

export default typeDefs;
