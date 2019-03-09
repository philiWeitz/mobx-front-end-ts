
class Config {

  // general configuration
  static NODE_ENV: string = process.env.NODE_ENV || 'development';
  static DEBUG: boolean = (process.env.NODE_ENV !== 'production');

  // API configuration
  static API_ROOT: string = process.env.API_ROOT || 'http://localhost:3001';

  // LOCALIZATION
  static SUPPORTED_LANG : string = process.env.SUPPORTED_LANG || 'en';
}

export default Config;
