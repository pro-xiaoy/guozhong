import dva from 'dva';
// import '../node_modules/antd/dist/antd.css'
// import './global.less'
// import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
// roadhog buildDll&&