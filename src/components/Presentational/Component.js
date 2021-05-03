import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import autobind from "autobind-decorator";

@connect( state => state )
class Component extends PureComponent {
    static displayName = 'Collapse';

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount(){
        this.mount = true;
    }

    componentWillUnmount() {
        this.mount = false;
    }

    @autobind
    onClick(){
        e.preventDefault();
    }

    render() {
        return (
            <div>
                Collapse
            </div>
        )
    }
}

export default Component;
