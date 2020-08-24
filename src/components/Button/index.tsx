import React from 'react';
import {Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';

const Buttons = (props) => {
  return(
    <>
      <Button className="ant-btn" danger>2312321</Button>
      <Button >2312321</Button>
      <Button  type="primary">2312321</Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </>
  )
}
export default Buttons 