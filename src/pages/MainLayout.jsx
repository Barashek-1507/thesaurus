import React from 'react';

import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class MainLayout extends React.Component {
    state = {
        collapsed: false,
        isUserLogIn: true,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        const isLogIn = this.state.isUserLogIn;
        const contentStyle = this.props.centered ?
            {
                margin: '0 16px',
                direction: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            } :
            {
                margin: '0 16px',
            }

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined/>}>
                            Thesaurus
                        </Menu.Item>
                        {isLogIn ? (
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="My Account">
                                <Menu.Item key="3">Statistics</Menu.Item>
                                <Menu.Item key="4">Setting</Menu.Item>
                                <Menu.Item key="5">Sign out</Menu.Item>
                            </SubMenu>
                        ) : (
                            <Menu.Item key="2" icon={<FileOutlined/>}>
                                Sign in
                            </Menu.Item>)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={contentStyle}>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Zaidullin Albert</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;