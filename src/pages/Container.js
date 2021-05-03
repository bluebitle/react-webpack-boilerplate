import React from 'react'

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
                <div style={style}>↑</div>
        </div>

    );
};

export default Container;
