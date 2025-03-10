import { combineReducers } from 'redux';

import data from './posts';
import auth from './auth'


export const reducers = combineReducers({ data , auth });