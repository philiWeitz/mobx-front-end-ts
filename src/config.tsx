
class Config {

  // general configuration
  static NODE_ENV: string = process.env.NODE_ENV || 'development';
  static DEBUG: boolean = (process.env.NODE_ENV !== 'production');

  // API configuration
  static API_ROOT: string = process.env.API_ROOT || 'http://localhost:3001';

  // LOCALIZATION
  static SUPPORTED_LANG : string = process.env.SUPPORTED_LANG || 'en';

  // GRAPH QL CONFIG
  static GRAPH_QL_URL : string = process.env.GRAPH_QL_URL || 'http://localhost:8080/graphql';
  static GRAPH_QL_SUBSCRIPTION_URL : string =
    process.env.GRAPH_QL_SUBSCRIPTION_URL || 'ws://localhost:8080/subscriptions';
}

export default Config;
