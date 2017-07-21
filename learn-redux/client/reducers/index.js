import { combineReducers } from 'redux';
import { rootReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, router: routerRuducer});

export default rootReducer;
