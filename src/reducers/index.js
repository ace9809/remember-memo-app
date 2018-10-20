/**
 * Created by Ace on 2018. 10. 13..
 */

import { combineReducers } from 'redux';
import labels from './labels';
import memos from './memos';

const rootReducer = combineReducers({
  labels,
  memos
});

export default rootReducer;