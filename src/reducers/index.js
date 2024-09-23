import { combineReducers} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import config from './config';
import layout from './layout';

export default combineReducers({
  config,
  layout
});
