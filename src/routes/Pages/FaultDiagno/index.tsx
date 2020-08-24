

import { Input, Form, Row, Col, Button, Tabs, Table, Tag, Space } from 'antd';
const { TabPane } = Tabs;
const { Search } = Input;


import styles from './index.less';
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
const PowerArchives = (props) => {


  return (
    <>
      <div className={styles.search}>
        <Search
          placeholder="电站列表"
          enterButton
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
      <div className={styles.condition}>
        <Row gutter={24}>
          <Col span={8} >
            <Form.Item
              label="省市县："
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
          <Col span={8} >
            <Form.Item
              label="省市县："
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
          <Col span={8} >
            <Form.Item
              label="省市县："
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>

        </Row>
        <Row gutter={24}>
          <Col span={8} >
            <Form.Item
              label="省市县："
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
          <Col span={8} >
            <Form.Item
              label="省市县："
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
          <Col span={8} >
            <Form.Item
              label="省市县："
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
                </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
              }}
            >
              Clear
                </Button>
          </Col>
        </Row>
      </div>
      <div className={styles.tabs}>
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Tab 1" key="1">
            <Table columns={columns} dataSource={data} />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
            </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>
      </div>
    </>

  );
};

export default PowerArchives