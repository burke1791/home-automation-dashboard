import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

function App() {

  const [count, setCount] = useState(0);

  const handleMenuClick = (event) => {
    console.log(event);
  }

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <Layout>
      <Header style={{ position: 'fixed', width: '100%', padding: 0 }}>
        <Menu
          mode='horizontal'
          theme='dark'
          selectable={false}
          onClick={handleMenuClick}
        >
          <Menu.Item key='brand' style={{ fontSize: '32px' }}>
            <HomeOutlined style={{ fontSize: 32 }} />
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        
      </Content>
    </Layout>
  );
}

export default App;