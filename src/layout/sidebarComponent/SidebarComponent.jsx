import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SidebarComponent extends Component {
  state = {
    collapsed: false,
  }

  toggleSideBar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Sider
        className="custom-sidebar"
        breakpoint="sm"
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className="custom-sider-head">
          {
            !this.state.collapsed &&
            <div className="fade-in">
              <Icon type="setting" spin />
              <span> Odds Reactor</span>
            </div>
          }
          <Icon
            onClick={this.toggleSideBar}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <Menu
          className="custom-menu"
          defaultOpenKeys={['sub1']}
          defaultSelectedKeys={['6']}
          mode="inline"
        >
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>subnav 1</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>subnav 2</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="8">Option 8</Menu.Item>
              <Menu.Item key="9">Option 9</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="10">
            <Icon type="pie-chart" />
            <span>Option 10</span>
          </Menu.Item>
          <Menu.Item key="11">
            <Icon type="desktop" />
            <span>Option 11</span>
          </Menu.Item>
          <Menu.Item key="12">
            <Icon type="inbox" />
            <span>Option 12</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SidebarComponent;
