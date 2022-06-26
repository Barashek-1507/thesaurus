import {Layout, Menu, Breadcrumb} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useHistory} from "react-router-dom";
import {signOut} from "../store/actions/userActions";

const {Header, Content, Footer} = Layout;

const MainLayout = ({children}) => {
    let isAdmin = useSelector(state => state.user.isAdmin);
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <Layout className="layout" style={{minHeight: "100vh"}}>
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key={0}>
                        <NavLink to="/thesaurus">
                            Тезаурус
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={1}>
                        <NavLink to="/account">
                            Мой аккаунт
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <NavLink to="/signOut">
                            Выход
                        </NavLink>
                    </Menu.Item>
                    {isAdmin &&
                        <Menu.Item key={3}>
                            <NavLink to="/admin">
                                Администрирование
                            </NavLink>
                        </Menu.Item>
                    }
                </Menu>
            </Header>
            <Content style={{padding: '15px 50px'}}>
                {children}
            </Content>
        </Layout>);
};

export default MainLayout;
