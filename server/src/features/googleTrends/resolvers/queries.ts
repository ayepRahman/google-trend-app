import { IResolverMap } from "interfaces/IResolvers";
import googleTrends from "google-trends-api";

interface IDefault {
  topics?: Array<{ mid: string; type: string; title: string }>;
  timelineData?: Array<{
    time: string;
    formattedTime: string;
    formattedAxisTime: string;
    value: Array<number>;
    formattedValue: Array<string>;
  }>;
  geoMapData?: Array<{
    coordinates: { lat: number; lng: number };
    geoName: string;
    value: Array<number>;
    formattedValue: Array<String>;
    maxValueIndex: number;
  }>;
}

interface IGoogleTrendsResponse {
  default: IDefault;
}

export default <IResolverMap>{
  autoComplete: async (_, { keyword }) => {
    try {
      const response: string = await googleTrends.autoComplete({
        keyword
      });
      const parseResponse: IGoogleTrendsResponse = JSON.parse(response);
      return parseResponse.default.topics;
    } catch (error) {
      return new Error(error);
    }
  },
  interestOverTime: async (
    _,
    {
      keyword,
      startTime,
      endTime,
      geo,
      hl,
      timezone,
      category,
      granularTimeResolution
    }
  ) => {
    try {
      const response: string = await googleTrends.interestOverTime({
        keyword,
        startTime: new Date("December 01, 2019"),
        endTime: new Date(),
        geo,
        hl,
        timezone,
        category,
        granularTimeResolution
      });
      const parseResponse: IGoogleTrendsResponse = JSON.parse(response);
      return parseResponse.default.timelineData;
    } catch (error) {
      return new Error(error);
    }
  },
  interestByRegion: async (
    _,
    { keyword, startTime, endTime, resolution, geo, hl, timezone, category }
  ) => {
    try {
      const response: string = await googleTrends.interestByRegion({
        keyword,
        startTime: new Date("December 01, 2019"),
        endTime: new Date(),
        resolution,
        geo,
        hl,
        timezone,
        category
      });

      const parseResponse: IGoogleTrendsResponse = JSON.parse(response);

      return parseResponse.default.geoMapData;
    } catch (error) {
      return new Error(error);
    }
  }
};
