import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import autobind from "autobind-decorator";
import { Typography, Row, Col } from 'antd';
import { Select } from "~components/Presentational"

const { Title } = Typography;


@connect( state => state )
class DefaultTextBox extends PureComponent {
    static displayName = 'DefaultTextBox';

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
            <Row justify="end">
                <Col span={20}>
                    <Title level={3} style={{marginBottom:'4.5px'}}>Data Table</Title>
                    <Title level={5}  style={{marginTop:'0px'}}>사용법에 관한 설명 <br/>
                        언제 어떤 상황에서 사용한다.</Title>
                </Col>
                <Col span={4}>
                    <Select/>
                </Col>
            </Row>
        )
    }
}

export default DefaultTextBox;
