import React, { PureComponent} from 'react';
import { connect } from 'react-redux';

import { Table, Row, Col } from 'antd';
import autobind from "autobind-decorator";
import _ from 'lodash';

import Sj from './Sj.css'
@connect( state => state )
class DefaultTableList extends PureComponent {
    static displayName = 'DefaultTableList';

    constructor(props) {
        super(props);

        this.state = {
            columns : [
                {
                    title: 'Name',
                    dataIndex: 'name',
                },
                {
                    title: 'Chinese Score',
                    dataIndex: 'chinese',
                    sorter: {
                        compare: (a, b) => a.chinese - b.chinese,
                        multiple: 3,
                    },
                },
                {
                    title: 'Math Score',
                    dataIndex: 'math',
                    sorter: {
                        compare: (a, b) => a.math - b.math,
                        multiple: 2,
                    },
                },
                {
                    title: 'English Score',
                    dataIndex: 'english',
                    sorter: {
                        compare: (a, b) => a.english - b.english,
                        multiple: 1,
                    },
                },
            ],
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    chinese: 98,
                    math: 60,
                    english: 70,
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    chinese: 98,
                    math: 66,
                    english: 89,
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    chinese: 98,
                    math: 90,
                    english: 70,
                },
                {
                    key: '4',
                    name: 'Jim Red',
                    chinese: 88,
                    math: 99,
                    english: 89,
                },
            ],
            rowSelection: {}
        }
        this.mount = false;
    }

    componentDidMount(){
        this.mount = true;
    }

    componentWillUnmount() {
        this.mount = false;
    }

    @autobind
    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    @autobind
    rowSelection(props) {
        const select = _.cloneDeep(props.eventReducer);
        if (select.select === 'option') {
            return { rowSelection:{ type : 'radio' }, bordered: false, showHeader: true};
        } else if (select.select === 'selection') {
            return { rowSelection:{ type : 'checkbox' }, bordered: true, showHeader: true, expandable: true };
        }
        return {}
    }


    render() {
        const { data, columns } = this.state;
        const option = this.rowSelection( this.props );

        return (
            <div>
            <Table
                style={{with:'80%'}}
                columns={columns}
                dataSource={data}
                loading={false}
                pagination
                expandable
                title=''
                showHeader
                top= 'none'
                bottom= 'bottomRight'
                onChange={this.onChange}
                {...option}
            />
            </div>

        )
    }
}

export default DefaultTableList;
