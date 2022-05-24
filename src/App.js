import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Settings from './components/pages/Settings/Settings';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Settings/Home/Home';
import Sam_app_version from './components/pages/Settings/SAM_SAM_APP_VERSION/Sam_app_version';
import Sam_prf_version from './components/pages/Settings/SAM_SAM_PRF_VERSION/Sam_prf_version';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/sam_sam_app_version' component={Sam_app_version} />
          <Route exact path='/sam_sam_prf_version' component={Sam_prf_version}/>
      </Switch>
    </Router>

  );
}

export default App;
