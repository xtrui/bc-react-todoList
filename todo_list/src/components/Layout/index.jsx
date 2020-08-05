import {Layout, Menu} from 'antd';
import TodoListContainer from '../TodoListContainner'
import TodoFormContainer from '../TodoFormContainer'
import {BrowserRouter, Link, Route} from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import * as React from "react";
import {Component} from "react";

const {Header, Sider, Content} = Layout;

class SiderDemo extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo"/>
                        <Menu style={{fontSize: '24px'}} theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                            <Menu.Item key="1" icon={<UserOutlined/>}>
                                <Link to={'/done'}>done</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                                <Link to={'/todo'}>todo</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined/>}>
                                <Link to={'/'}>all</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                                style: {color: "blue", fontSize: "50px"}
                            })}

                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: "24px",
                                minHeight: "880px",
                                // backgroundImage:"url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3013778081,2300854438&fm=26&gp=0.jpg')",
                                // backgroundSize: "100% 100%"
                            }}
                        >
                            <h2>TodoList</h2>
                            <Route exact path="/" component={TodoListContainer}/>
                            <Route exact path="/" component={TodoFormContainer}/>
                            <Route path="/done" component={TodoListContainer}/>
                            <Route path="/todo" component={TodoListContainer}/>
                            {/*<TodoFormContainer/>*/}
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default SiderDemo
