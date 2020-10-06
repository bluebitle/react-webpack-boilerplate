import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import {  Row, Col } from 'antd';

@connect( state => state )
class Button extends PureComponent {
    static displayName = 'Button';

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

    render() {
        return (
            <div>
                Button
            </div>
        )
    }
}

export default Button;
