import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


@connect( state => state )
class DefaultTableListhr extends PureComponent {
    static displayName = 'DefaultTableListhr';

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
                    category: '급여',
                    code: 'P01',
                    codeName: '기본급',
                    contract: '계약',
                    useYn: 'Y',
                    upper:'반올림',
                    unit:'10',
                    startDate:'2020.01.01',
                    endDate:'9999.12.31'
                },
                {
                    category: '급여',
                    code: 'P02',
                    codeName: '기본급',
                    contract: '계약',
                    useYn: 'Y',
                    upper:'반올림',
                    unit:'10',
                    startDate:'2020.01.01',
                    endDate:'9999.12.31'
                },
                {
                    category: '급여',
                    code: 'P03',
                    codeName: '기본급',
                    contract: '계약',
                    useYn: 'Y',
                    upper:'반올림',
                    unit:'10',
                    startDate:'2020.01.01',
                    endDate:'9999.12.31'
                },
                {
                    category: '급여',
                    code: 'P04',
                    codeName: '기본급',
                    contract: '계약',
                    useYn: 'Y',
                    upper:'반올림',
                    unit:'10',
                    startDate:'2020.01.01',
                    endDate:'9999.12.31'
                },
                {
                    category: '급여',
                    code: 'P05',
                    codeName: '기본급',
                    contract: '계약',
                    useYn: 'Y',
                    upper:'반올림',
                    unit:'10',
                    startDate:'2020.01.01',
                    endDate:'9999.12.31'
                },
                {
                    category: '급여',
                    code: 'P06',
                    codeName: '기본급',
                    contract: '계약',
                    useYn: 'Y',
                    upper:'반올림',
                    unit:'10',
                    startDate:'2020.01.01',
                    endDate:'9999.12.31'
                },
                {
                    category: '급여',
                    code: 'P07',
                    codeName: '기본급',
                    contract: '계약',
                    useYn: 'Y',
                    upper:'반올림',
                    unit:'10',
                    startDate:'2020.01.01',
                    endDate:'9999.12.31'
                }
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


    getBody() {
        const arr = []
        const data = this.state.data;
        _.forEach(data, (item, index)=>{
            arr.push(
                <tr className="tui-grid-row-odd tui-grid-cell-current-row" style={{height: '40px'}}  key={`tr_body_${index}`}>
                    <td data-row-key={index} data-column-name="th1" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.category}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th2" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.code}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th3" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.codeName}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th4" className="tui-grid-cell tui-grid-cell-has-input custom-cell" style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <label className="checkbox" htmlFor={`chk${index}`}>
                            <input className="hidden-input" id={`chk${index}`} type="checkbox"/><span className="custom-chk"></span></label>
                    </td>
                    <td data-row-key={index} data-column-name="th5" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.contract}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th6" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.useYn}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th7" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.upper}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th8" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.unit}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th9" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.startDate}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th10" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{item.endDate}</div>
                    </td>
                    <td data-row-key={index} data-column-name="th11" className="tui-grid-cell tui-grid-cell-has-input " style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content"></div>
                    </td>
                    <td data-row-key={index} data-column-name="th12" className="tui-grid-cell tui-grid-cell-has-input custom-cell" style={{textAlign: 'left', verticalAlign: 'middle'}}>
                        <button className="custom-txt-btn">상세</button>
                    </td>
                </tr>
            )
        })


        return arr;
    }
    getFirstBody() {
        const arr = []
        const data = this.state.data;
        _.forEach(data, (item, index)=>{
            arr.push(
                <tr className="tui-grid-row-odd" style={{height: '40px'}} key={`tr_first_body_${index}`}>
                    <td data-row-key={index} data-column-name="_checked"
                        className="tui-grid-cell tui-grid-cell-has-input tui-grid-cell-row-header "
                        style={{textAlign: 'center', verticalAlign: 'middle'}}>
                        <label className="checkbox" htmlFor={`two${index}`}>
                            <input className="hidden-input" id={`two${index}`} type="checkbox"/>
                            <span className="custom-chk"></span></label>
                    </td>
                    <td data-row-key={index} data-column-name="_number"
                        className="tui-grid-cell tui-grid-cell-has-input tui-grid-cell-row-header "
                        style={{textAlign: 'center', verticalAlign: 'middle'}}>
                        <div className="tui-grid-cell-content">{index+1}</div>
                    </td>
                </tr>
            )
        })


        return arr;
    }


    render() {
        return (
            <div className="grid_section section_card v-card v-sheet theme--light">
                {/*<div className="section_header">*/}
                {/*    <strong className="sub_tit">조회결과 10건</strong>*/}
                {/*</div>*/}
                {/*<div className="btn_wrap">*/}
                {/*    <div className="view_btn_area"><a href="/salary-item-detail" className="">*/}
                {/*        <button type="button" className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="페이지 이동">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <span className="icon btn_view1">*/}
                {/*                    <img src="/resources/images/ico_view1.svg" alt=""/>*/}
                {/*                </span>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*    </a>*/}
                {/*        <button type="button" className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="화면 분할">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <img src="/resources/images/ico_view2.svg" alt=""/>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*        <button type="button" className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="팝업">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <img src="/resources/images/ico_view3.svg" alt=""/>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="util_btn_area">*/}
                {/*        <button type="button" className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="전체 다운로드">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <i aria-hidden="true" className="v-icon notranslate material-icons theme--light" style={{color: 'rgb(184, 186, 195)', caretColor: 'rgb(184, 186, 195)'}}>get_app</i>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*        <button className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="엑셀 업로드">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <i aria-hidden="true" className="v-icon notranslate material-icons theme--light" style={{color: 'rgb(184, 186, 195)', caretColor: 'rgb(184, 186, 195)'}}>publish</i>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*        <button type="button" className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="엑셀업로드 양식 다운로드">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <span className="icon btn_down_form">*/}
                {/*                    <img src="/resources/images/ico_down_form.svg" alt=""/>*/}
                {/*                </span>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*        <button type="button" className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="삭제">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <i aria-hidden="true" className="v-icon notranslate material-icons theme--light" style={{color: 'rgb(184, 186, 195)', caretColor: 'rgb(184, 186, 195)'}}>delete</i>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*        <button type="button" className="btn_icon v-btn v-btn--flat v-btn--text theme--light v-size--default grey--text text--lighten-1" title="항목 추가">*/}
                {/*            <span className="v-btn__content">*/}
                {/*                <i aria-hidden="true" className="v-icon notranslate material-icons theme--light" style={{color: "rgb(184, 186, 195)", caretColor: "rgb(184, 186, 195)"}}>add</i>*/}
                {/*            </span>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container">

                    <div className="custom-grid">
                        <div data-grid-id="1" className="tui-grid-container tui-grid-show-lside-area"
                             style={{width: '100%', height: '330px'}}>
                            <div className="tui-grid-content-area tui-grid-no-scroll-y">
                                <div className="tui-grid-lside-area" style={{width: '81px', display: 'block'}}>
                                    <div className="tui-grid-header-area" style={{height: '40px'}}>
                                        <table className="tui-grid-table">
                                            <colgroup>
                                                <col data-column-name="" style={{width: '40px'}}/>
                                                    <col data-column-name="" style={{width: '40px'}}/>
                                            </colgroup>
                                            <tbody>
                                            <tr style={{height: '40px'}}>
                                                <th data-column-name="_checked" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-row-header" style={{textAlign: 'center', verticalAlign: 'middle'}}><span>
                                                    <label htmlFor="all-checkbox" className="checkbox">
                                                        <input type="checkbox" id="all-checkbox" className="hidden-input" name="_checked"/>
                                                            <span className="custom-chk"></span>
                                                        </label>
                                                    </span></th>
                                                <th data-column-name="_number"
                                                    className="tui-grid-cell tui-grid-cell-header tui-grid-cell-row-header"
                                                    style={{textAlign: 'center', verticalAlign: 'middle'}}>No.
                                                </th>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="tui-grid-column-resize-container" style={{display: 'block', marginTop: '-35px', height: '35px'}}></div>
                                    </div>
                                    <div className="tui-grid-body-area" style={{height: '337px'}}>
                                        <div className="tui-grid-body-container" style={{width: '80px', height: '321px'}}>
                                            <div className="tui-grid-table-container" style={{top: '0px', left: '0px', overflow: 'visible'}}>
                                                <table className="tui-grid-table">
                                                    <colgroup>
                                                        <col data-column-name="" style={{width: '40px'}}/>
                                                            <col data-column-name="" style={{width: '40px'}}/>
                                                    </colgroup>
                                                    <tbody>
                                                        { this.getFirstBody() }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="tui-grid-scrollbar-left-bottom"></div>
                                </div>


                                <div className="tui-grid-rside-area" style={{display: 'block', marginLeft: '80px', overflow:'hidden'}}>
                                    <div className="tui-grid-header-area" style={{height: '40px'}}>
                                        <table className="tui-grid-table">
                                            <colgroup>
                                                <col data-column-name="" style={{width: '135px'}}/>
                                                <col data-column-name="" style={{width: '135px'}}/>
                                                <col data-column-name="" style={{width: '135px'}}/>
                                                <col data-column-name="" style={{width: '80px'}}/>
                                                <col data-column-name="" style={{width: '135px'}}/>
                                                <col data-column-name="" style={{width: '80px'}}/>
                                                <col data-column-name="" style={{width: '135px'}}/>
                                                <col data-column-name="" style={{width: '135px'}}/>
                                                <col data-column-name="" style={{width: '150px'}}/>
                                                <col data-column-name="" style={{width: '150px'}}/>
                                                <col data-column-name="" style={{width: '80px'}}/>
                                                <col data-column-name="" style={{width: '80px'}}/>
                                            </colgroup>
                                            <tbody>
                                            <tr style={{height: '40px'}}>
                                                <th data-column-name="th1" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    급여항목구분
                                                </th>
                                                <th data-column-name="th2" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    항목코드
                                                </th>
                                                <th data-column-name="th3" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    항목명
                                                </th>
                                                <th data-column-name="th4" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    예외여부
                                                </th>
                                                <th data-column-name="th5" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    계산근거
                                                </th>
                                                <th data-column-name="th6" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    일할여부
                                                </th>
                                                <th data-column-name="th7" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    단수구분
                                                </th>
                                                <th data-column-name="th8" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    단수단위
                                                </th>
                                                <th data-column-name="th9" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    시작일자
                                                </th>
                                                <th data-column-name="th10" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    종료일자
                                                </th>
                                                <th data-column-name="th11" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    비고
                                                </th>
                                                <th data-column-name="th12" className="tui-grid-cell tui-grid-cell-header tui-grid-cell-selected" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                                    상세
                                                </th>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="tui-grid-column-resize-container" style={{ display: 'block', marginTop: '-35px', height: '35px'}}></div>
                                    </div>
                                    <div className="tui-grid-body-area" style={{ height: '300px', overflow: 'hidden' }}>
                                        <div className="tui-grid-body-container" style={{ width: '1465px', height: '321px' }}>
                                            <div className="tui-grid-table-container" style={{top: '0px', left: '0px', overflow: 'visible'}}>
                                                <table className="tui-grid-table">
                                                    <colgroup>
                                                        <col data-column-name="" style={{width: '135px'}}/>
                                                        <col data-column-name="" style={{width: '135px'}}/>
                                                        <col data-column-name="" style={{width: '135px'}}/>
                                                        <col data-column-name="" style={{width: '80px'}}/>
                                                        <col data-column-name="" style={{width: '135px'}}/>
                                                        <col data-column-name="" style={{width: '80px'}}/>
                                                        <col data-column-name="" style={{width: '135px'}}/>
                                                        <col data-column-name="" style={{width: '135px'}}/>
                                                        <col data-column-name="" style={{width: '150px'}}/>
                                                        <col data-column-name="" style={{width: '150px'}}/>
                                                        <col data-column-name="" style={{width: '80px'}}/>
                                                        <col data-column-name="" style={{width: '80px'}}/>
                                                    </colgroup>
                                                    <tbody>
                                                    { this.getBody()}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tui-grid-layer-focus tui-grid-layer-focus-deactive">
                                                <div className="tui-grid-layer-focus-border"
                                                     style={{top: '0px', left: '135px', width: '1px', height: '41px'}}></div>
                                                <div className="tui-grid-layer-focus-border"
                                                     style={{top: '1px', left: '135px', width: '136px', height: '1px'}}></div>
                                                <div className="tui-grid-layer-focus-border"
                                                     style={{top: '0px', left: '270px', width: '1px', height: '41px'}}></div>
                                                <div className="tui-grid-layer-focus-border"
                                                     style={{top: '40px', left: '135px', width: '136px', height: '1px'}}></div>
                                            </div>
                                            <div>
                                                <div className="tui-grid-layer-selection"
                                                     style={{top: '0px', height: '319px', left: '0px', width: '1465px'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tui-grid-scrollbar-frozen-border"
                                         style={{height: '17px', width: '0px', marginLeft: '0px'}}></div>
                                    <div className="tui-grid-scrollbar-right-bottom" style={{height: '17px'}}></div>
                                </div>



                                {/*<div className="tui-grid-border-line tui-grid-border-line-top"></div>*/}
                                {/*<div className="tui-grid-border-line tui-grid-border-line-left"></div>*/}
                                {/*<div className="tui-grid-border-line tui-grid-border-line-right"></div>*/}
                                {/*<div className="tui-grid-border-line tui-grid-border-line-bottom" style={{bottom: '17px'}}></div>*/}
                            </div>
                            <div className="tui-grid-layer-state"
                                 style={{display: 'none', top: '41px', height: '319px', left: '0px', right: '1px'}}>
                                <div className="tui-grid-layer-state-content"><p></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DefaultTableListhr;
