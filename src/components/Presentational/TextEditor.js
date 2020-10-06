import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import autobind from "autobind-decorator";
import ReactPrismEditor from "react-prism-editor";



@connect( state => state )
class TextEditor extends PureComponent {
    static displayName = 'TextEditor';

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
        const redux = this.getReducer(this.props);
        const code = redux.text ||
            `<Table 
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

export default TextEditor;
