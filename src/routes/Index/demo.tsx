<div className={styles.mainbody}>
<header className={styles.header}>
  <div className={styles.header_name}>分布式光伏智慧运维大数据云平台</div>

  <div className={styles.menus}>
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" >
        Navigation One
       </Menu.Item>
      <Menu.Item key="app" disabled >
        Navigation Two
         </Menu.Item>
      <SubMenu title="Navigation Three - Submenu" key="Submenu">
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
      {/* {menuslist.map((item, index) => 
        <SubMenu title={item.name}>
          <Menu.Item key='321321'>321312</Menu.Item>
          {item.children && item.children.length>0 && item.children.map((item1, index2) => <Menu.Item key={item1.name}>{item1.name}</Menu.Item>)}
        </SubMenu>)} */}
    </Menu>
  </div>

  <div className={styles.header_right}>
    <div className={styles.weather_icon}></div>
    <div className={styles.daliy}>
      <p>2020.03.10</p>
      <p>周二 09.24</p>
    </div>
    <div className={styles.userinfo}>
      <div className={styles.head_bg}></div>
      <div className={styles.nickname}>XXXX</div>
    </div>
  </div>
</header>
</div>