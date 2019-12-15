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
  interestOverTime: async (_, { keyword }) => {
    try {
      const response: string = await googleTrends.interestOverTime({
        keyword
      });
      const parseResponse: IGoogleTrendsResponse = JSON.parse(response);
      return parseResponse.default.timelineData;
    } catch (error) {
      return new Error(error);
    }
  },
  interestByRegion: async (_, { keyword, startTime, endTime, resolution }) => {
    try {
      const response: string = await googleTrends.interestByRegion({
        keyword,
        startTime,
        endTime,
        resolution
      });
      const parseResponse: IGoogleTrendsResponse = JSON.parse(response);
      return parseResponse.default.timelineData;
    } catch (error) {
      return new Error(error);
    }
  }
};
