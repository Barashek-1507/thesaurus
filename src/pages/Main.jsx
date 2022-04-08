import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Main = () => {
    const navLinks = ['Thesaurus', 'My account', 'Sing in', 'Sign out']
    return(
        <Layout className="layout" style={{minHeight:"100vh"}}>
        <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {navLinks.map((value, index) =>
                    <Menu.Item key={index}>{value}</Menu.Item>
                )}
            </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
            <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>);
};

export default Main;
