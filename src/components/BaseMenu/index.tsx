import React from 'react';
import { Menu} from 'antd';
const { SubMenu } = Menu;

const BaseMenu = (props) => {
  const { menuData } = props
  console.log('menu++++++', menuData)

  const renderMenu = (menuData) => {
    return menuData.map(item => {
      if(item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.name}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.name}>{item.name}</Menu.Item>
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
export default BaseMenu