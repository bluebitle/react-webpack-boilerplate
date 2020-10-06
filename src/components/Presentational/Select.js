import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { Select as Sel } from 'antd';

import actions from '../../redux/actions'

const { Option } = Sel;

import autobind from "autobind-decorator";

@connect( state => state )
class Select extends PureComponent {
    static displayName = 'Select';

    constructor(props) {
        super(props);

        this.state = {
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
    handleChange(value) {
        console.log(`selected ${value}`);
        this.props.dispatch( actions.eventAction.setSelect({select: value}));
    }

    render() {
        return (
            <Sel defaultValue="default" style={{ width: '265px' }} onChange={this.handleChange}>
                <Option value="default">Default</Option>
                <Option value="selection">With Selection</Option>
                <Option value="option">With Option</Option>
            </Sel>
        )
    }
}

export default Select;
