import * as React from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';

import CounterContainer from '../components/counter/CounterContainer';
import Login from './login';

const Root: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/CounterContainer">CounterContainer</Link></li>
        <li><Link to="/login">Login Page</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact={true} render={() => <h3>Home</h3>} />
			<Route path="/CounterContainer" component={CounterContainer} />
			<Route path="/login" component={Login} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
)
/*
<BrowserRouter />
  - HTML5 히스토리 API를 사용하여 주소를 관리하는 라우터(해쉬뱅 모드 사용 안함)
<Route />
  - 요청 경로와 렌더링할 컴포넌트를 설정한다
<Switch />
  - 하위에 라우터 중 하나를 선택한다
<Redirect />
  - 요청 경로를 다른 경로로 리다이렉션한다
 */

export default Root;
