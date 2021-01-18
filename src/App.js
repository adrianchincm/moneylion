import './App.css';
import Container from './containers/Container';

import {  Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'

const App = props => {
  

  let routes = (
    <Switch>     
        <Route path = "/welcome" component={Container}></Route>
        <Route path = "/personal" component={Container}></Route>
        <Route path = "/dob" component={Container}></Route>
        <Route path = "/agreement" component={Container}></Route>
      <Redirect to="/welcome" />
    </Switch>
  );

  return (
    <div class="bg-bgPrimary h-screen text-center">
      {/* <Toolbar pathname={history.location.pathname}/>
      <Container pathname={history.location.pathname}/> */}
      {/* {console.log(history.location.pathname)} */}
      {routes}
    </div>
  );
}

export default App;
