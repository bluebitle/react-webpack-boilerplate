import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import autobind from "autobind-decorator";

@connect( state => state )
class DefaultCardList extends PureComponent {
    static displayName = 'DefaultCardList';

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
                 DefaultCardList
             </div>
        )
    }
}

export default DefaultCardList;
