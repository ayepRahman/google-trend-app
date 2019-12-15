import { mergeSchemas } from "graphql-tools";
import googleTrendSchema from "./googleTrends/schema";

export default mergeSchemas({ schemas: [googleTrendSchema] });
