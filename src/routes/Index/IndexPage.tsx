import React, {useState} from 'react';
import { connect } from 'dva';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import styles from './IndexPage.less';


const menuslist = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/',
    name: '运行监控',
  },
  {
    path: '/',
    name: '异常预警',
    children: [
      {
        name: '预警列表',
        path: '/',
      },
      {
        name: '端天气预警',
        path: '/'
      }
    ]
  },
  {
    path: '/',
    name: '故障诊断',
  },
  {
    path: '/',
    name: '智能巡检',
  },
  {
    path: '/',
    name: '远程运维',
  },
  {
    path: '/',
    name: '设备管理',
  },
  {
    path: '/',
    name: '后台管理',
  }
  , {
    path: '/',
    name: '建站咨询',
  }, {
    path: '/',
    name: '采购安装',
  }
  , {
    path: '/',
    name: '并网申请',
  }
  , {
    path: '/',
    name: '光伏结算',
  }
]


const  IndexPage = (props) => {
  const [current, setcurrent] = useState('mail')
  const handleClick = (val) => { setcurrent(val)}

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" >
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" >
          Navigation Two
        </Menu.Item>
        <SubMenu  title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
