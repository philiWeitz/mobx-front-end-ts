
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

// configure enzyme
enzyme.configure({ adapter: new Adapter() });
