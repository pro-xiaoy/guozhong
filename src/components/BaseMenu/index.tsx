import React from 'react';
import { connect } from 'dva';
import { Router, Route, Switch,withRouter, routerRedux } from 'dva/router';

import { Menu} from 'antd';
const { SubMenu } = Menu;

const BaseMenu = (props) => {
  const { menuData } = props
  console.log('props++', props)
  const hrefRoute =(path) => {
    // props.history.push(path)
    routerRedux.push(path)
  }
  const renderMenu = (menuData) => {
    return menuData.map(item => {
      if(item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.name}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.name} onClick={() => {hrefRoute(item.path)}}>{item.name}</Menu.Item>
    })
  }

  return (
    <>
      <Menu selectedKeys={['index']} mode="horizontal">
          {renderMenu(menuData)}
      </Menu>
    </>
  )
}
export default connect(withRouter)(BaseMenu)