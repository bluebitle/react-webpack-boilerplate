import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import autobind from "autobind-decorator";

@connect( state => state )
class DefaultComponent extends PureComponent {
    static displayName = 'DefaultComponent';

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
              <div onClick={this.onClick}>
                  DefaultComponent
             </div>
        )
    }
}

export default DefaultComponent;
