import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import autobind from "autobind-decorator";
import ReactPrismEditor from "react-prism-editor";

const temp =
    `{
        title: '급여항목구분',
        dataIndex: 'th1',
        key: 'th1',
        type: 'string',
        width: '10%',
        ...this.getColumnProps('th1'),
    },
    {
        title: '항목코드',
        dataIndex: 'th2',
        key: 'th2',
        type: 'string',
        width: '10%',
        ...this.getColumnProps('th2'),
    },
    {
        title: '항목명',
        dataIndex: 'th3',
        key: 'th3',
        type: 'string',
        width: '10%',
        ...this.getColumnProps('th3'),
    },
    {
        title: '예외여부',
        dataIndex: 'th4',
        key: 'th4',
        type: 'select',
        width: '10%',
        ...this.getColumnProps('th4'),
    },
    {
        title: '계산근거',
        dataIndex: 'th5',
        key: 'th5',
        type: 'string',
        width: '10%',
        ...this.getColumnProps('th5'),
    },
    {
        title: '단수구분',
        dataIndex: 'th6',
        key: 'th6',
        type: 'string',
        width: '10%',
        ...this.getColumnProps('th6'),
    },
    {
        title: '단수단위',
        dataIndex: 'th7',
        key: 'th7',
        type: 'string',
        width: '10%',
        ...this.getColumnProps('th7'),
    },
    {
        title: '시작일자',
        dataIndex: 'th8',
        key: 'th8',
        type: 'date',
        width: '10%',
        ...this.getColumnProps('th8'),
    },
    {
        title: '종료일자',
        dataIndex: 'th9',
        key: 'th9',
        type: 'date',
        width: '10%',
        ...this.getColumnProps('th9'),
    },
    {
        title: '비고',
        dataIndex: 'th10',
        key: 'th10',
        type: 'string',
        width: '10%',
        ...this.getColumnProps('th10'),
    },
    {
        title: '상세',
        dataIndex: 'th11',
        key: 'th11',
        type: 'button',
        link: '/{value}',
        width: '10%',
        ...this.getColumnProps('th11'),
    }`;


@connect( state => state )
class TextArea extends PureComponent {
    static displayName = 'TextArea';

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

    getReducer(props) {
        return _.cloneDeep(props.eventReducer);
    }

    @autobind
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor, monaco);
        editor.focus();
    }

    @autobind
    onChange(newValue, e) {
        console.log('onChange', newValue, e);
    }




    render() {
        const code =
            `<Table 
    style={{with:'100%'}} 
    columns={  [
        ...columns,
      {
        title: '예외여부',
        dataIndex: 'th4',
        key: 'th4',
        type: 'select',
        width: '10%',
        ...this.getColumnProps('th4'),
      }, 
      {
        title: '시작일자',
        dataIndex: 'th8',
        key: 'th8',
        type: 'date',
        width: '10%',
        ...this.getColumnProps('th8'),
      },
      {
        title: '종료일자',
        dataIndex: 'th9',
        key: 'th9',
        type: 'date',
        width: '10%',
        ...this.getColumnProps('th9'),
      },
      {
        title: '상세',
        dataIndex: 'th11',
        key: 'th11',
        type: 'button',
        link: '/{value}',
        width: '10%',
        ...this.getColumnProps('th11'),
      }
    ] } 
    dataSource={ data } 
    bordered={ true } 
    loading={ false } 
    theme={ 'KOLONHR'}
    pagination={ true } 
    size='default' 
    title='' 
    top='none' 
    bottom='bottomRight' 
    rowSelection={ { type: 'checkbox' } }
    onChange={ this.onChange }
    />`
        return (
            <div>
                <ReactPrismEditor
                    language={'jsx'}
                    theme={'okaidia'}
                    code={code}
                    lineNumber={true}
                    readOnly={true}
                    clipboard={true}
                    changeCode={code => {
                        this.code = code
                    }}
                />
            </div>
        )
    }
}

export default TextArea;
