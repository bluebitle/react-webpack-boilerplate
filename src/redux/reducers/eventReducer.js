import { fromJS } from 'immutable';

import actions from '../actions';
import React from "react";


const initialState = fromJS( {
    select: 'default',
    text: " <Table\n" +
        "  style={{with:'80%'}}\n" +
        "  columns={columns}\n" +
        "  dataSource={data}\n" +
        "  bordered={true}\n" +
        "  loading={false}\n" +
        "  pagination\n" +
        "  size='default'\n" +
        "  expandable\n" +
        "  title=''\n" +
        "  showHeader\n" +
        "  top= 'none'\n" +
        "  bottom= 'bottomRight'\n" +
        "            />\n" +
        "                "

})

const eventReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case actions.eventAction.SET_SELECT:
            let text =`<Table 
    style={{with:'80%'}} 
    columns={ columns } 
    dataSource={ data } 
    bordered={ true } 
    loading={ false } 
    pagination={ true } 
    size='default' 
    title='' 
    top='none' 
    bottom='bottomRight' />`
            if( action.select === 'selection' ){
                text = `<Table 
    style={{with:'80%'}} 
    columns={ columns } 
    dataSource={ data } 
    bordered={ true } 
    loading={ false } 
    pagination={ true } 
    size='default'
    top='none'
    title='' 
    bottom='bottomRight' 
    rowSelection={ { type: 'checkbox' } } />`;
            }else if ( action.select === 'option' ){
                text =  `<Table 
    style={{with:'80%'}} 
    columns={ columns } 
    dataSource={ data } 
    bordered={ false } 
    loading={ false } 
    pagination={ true } 
    size='default'
    top='none'
    title='' 
    bottom='bottomRight' 
    showHeader={ true } 
    rowSelection={ { type: 'radio' } } />`;
            }
            return {
                select: action.select,
                text:text
            }
        default:
            return state;
    }
};

export default eventReducer;
