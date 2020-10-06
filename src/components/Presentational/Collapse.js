import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import autobind from "autobind-decorator";

@connect( state => state )
class Collapse extends PureComponent {
    static displayName = 'Collapse';

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
                Collapse
            </div>
        )
    }
}

export default Collapse;
