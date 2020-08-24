import React, { useState } from 'react';
import { connect } from 'dva';
import {  Breadcrumb, Input, Form, Row, Col, Button, Tabs, Table, Tag , Space} from 'antd';
import { Router, Route, Switch } from 'dva/router';

const { Search } = Input;
const { TabPane } = Tabs;

import styles from './IndexPage.less';
import BaseMenu from '@/components/BaseMenu'
import PowerArchives from '../Pages/PowerArchives'
const menuslist = [
  {
    path: '/',
    key: 'index',
    name: '首页',
    children: [
      {
        name: '集中监控',
        path: '/home/PowerArchives',
      },
      {
        name: '电站列表',
        path: '/home/FaultDiagno'
      }
    ]
  },
  {
    path: '/',
    name: '运行监控',
    children: [
      {
        name: '电站在线监测',
        path: '/',
      },
      {
        name: '视频监控',
        path: '/',
        children: [
          {
            name: '环境视频',
            path: '/',
          }
        ]
      }
    ]
  },
  {
    path: '/',
    name: '异常预警',
    children: [
      {
        name: '设备异常预警',
        path: '/',
      },
      {
        name: '极端天气预警',
        path: '/'
      }
    ]
  },
  {
    path: '/',
    name: '故障诊断',
    children: [
      {
        name: '组件热斑缺陷诊断',
        path: '/',
      },
      {
        name: '组件隐裂缺陷诊断',
        path: '/'
      }
    ]
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
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const IndexPage = (props) => {
  console.log('props++++', props)
  const callback = () => {}
  const login = () => {
    props.history.push('/login')
  }
  return (
    <>
      <div className={styles.mainbody}>
        <header className={styles.header}>
          <div className={styles.header_name}>分布式光伏智慧运维大数据云平台</div>

          <div className={styles.menus}>
            <BaseMenu menuData={menuslist} history={history}/>
          </div>

          <div className={styles.header_right}>
            <div className={styles.weather_icon}></div>
            <div className={styles.daliy}>
              <p>2020.03.10</p>
              <p>周二 09.24</p>
            </div>
            <div className={styles.userinfo}>
              <div className={styles.head_bg} onClick={login}></div>
              <div className={styles.nickname}>XXXX</div>
            </div>
          </div>
        </header>
        <main className={styles.main} >
          <div className={styles.breadcrumb}>
            <Breadcrumb>
              <Breadcrumb.Item>基础设置</Breadcrumb.Item>
              <Breadcrumb.Item>电站档案</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div>
            <Switch>
              <Route path="/home/PowerArchives"  component={PowerArchives} />
            </Switch>

          </div>

 
        </main>

      </div>
    </>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
