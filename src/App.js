import './App.css';
import Container from './containers/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import {  Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom'
import { defaultTheme } from './styles/materialui'

const App = props => {
  

  let routes = (
    <Switch>     
        <Route path = "/welcome" component={Container}></Route>
        <Route path = "/personal" component={Container}></Route>
        <Route path = "/dob" component={Container}></Route>
        <Route path = "/agreement" component={Container}></Route>
        <Route path = "/success" component={Container}></Route>
      <Redirect to="/welcome" />
    </Switch>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <div class="bg-bgPrimary h-screen text-center">        
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;
