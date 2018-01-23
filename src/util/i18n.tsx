
import * as _ from 'lodash';
import * as i18n from 'i18next';
import * as moment from 'moment';
import * as LanguageDetector from 'i18next-browser-languagedetector';

import config from '../config';

const en = require('../../localization/en.json');

// parse the languages from a comma separated string
const supportedLang = _.split(config.SUPPORTED_LANG, ',');

// require all supported languages
const allResources = {
  en,
};

// pick only those resources which are defined
const resources = _.pick(allResources, supportedLang);

// the default language is the one defined first
const fallbackLanguage = supportedLang[0] || 'en';

// TODO: ugly fix for unit tests -> change it
if (config.NODE_ENV === 'test') {
  i18n.use = () => { return i18n; };
  i18n.init = () => { return i18n; };
  i18n.t = () => { return ''; };
}

export const initI18n = (callback: () => void): void => {
  const i18Next = i18n
    .use(LanguageDetector)
    .init({
      resources,
      debug: config.DEBUG,
      defaultNS: 'common',
      fallbackNS: 'common',
      fallbackLng: fallbackLanguage,
    });

  if (i18Next !== null) {
    moment.locale(i18Next.language);
  }
  if (callback) {
    callback();
  }
};

export const t = (key: string, params : object = {}, namespace? : string) : string => {
  const nameSpaceKey : string = namespace
    ? `${namespace}:${key.toLowerCase()}` : key.toLowerCase();
  return i18n.t(nameSpaceKey, params);
};

export const transNameSpace = (namespace : string) : Function => {
  return (key : string, params : any = {}) : string => {
    return t(key, params, namespace);
  };
};

export const changeLanguage = (lang : string) : Promise<void> => {
  return new Promise((resolve) => {
    i18n.changeLanguage(lang, () => {
      resolve();
    });
    moment.locale(lang);
  });
};
