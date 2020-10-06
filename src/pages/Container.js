import React from 'react'
import { BackTop} from 'antd';

const Container = ({ children }) => {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 25,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };


    return (
        <div style={{ height: 'auto', padding: 8 }}>
            {children}
            <BackTop>
                <div style={style}>↑</div>
            </BackTop>
        </div>

    );
};

export default Container;
