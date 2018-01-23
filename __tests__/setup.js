
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

const { initI18n } = require('../src/util/i18n');

// configure enzyme
enzyme.configure({ adapter: new Adapter() });

// setup localization
initI18n(() => {});