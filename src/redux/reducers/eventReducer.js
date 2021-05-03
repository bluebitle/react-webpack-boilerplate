import { fromJS } from 'immutable';

import actions from '../actions';
import React from "react";


const eventReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actions.eventAction.SET_SELECT:
            return {
                selected: action.selected,
                text: action.text
            }
        default:
            return state;
    }
};

export default eventReducer;
