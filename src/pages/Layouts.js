import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import _ from 'lodash';
import data from '../json/nav.json';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//{children}
const Layouts = ({ children }) => {


    const getMenu =()=>{
        const arr = [];
        _.forEach( data, (item, index)=> {
            arr.push(<Menu.Item key={index}>{item.name}</Menu.Item>)
        });

        return arr;
    }

    return (
        <Layout>
            <Header className="header" style={{backgroundColor: "#fff"}}>
                <div className="logo" style={{
                    width: '50px',
                    float: 'left'
                }}>
                    <img alt="logo" src="../../resources/images/kolon-logo.svg"/>
                </div>
                <Menu theme="white" mode="horizontal" defaultSelectedKeys={['3']} style={{ textAlign: 'right' }}>
                    <Menu.Item key="1">Overview</Menu.Item>
                    <Menu.Item key="2">Foundations</Menu.Item>
                    <Menu.Item key="3">Components</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['6']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title="Components">
                            { getMenu() }
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Components</Breadcrumb.Item>
                        <Breadcrumb.Item>Data Table</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Layouts;
