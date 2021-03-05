import { Component } from 'react';
import {Button} from 'reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink as RRNavLink,
} from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import WorkspacePage from './pages/WorkspacePage';
import IndexPage from './pages/IndexPage';
import SharePage from './pages/SharePage';
import Knowme from './pages/Knowme';
import './App.css';

class App extends Component {
  render() {
    const navbarHeight = '56px';
    return (
      <Router>
        <>
          <Navbar
            color="dark"
            dark
            expand="md"
            style={{ flexShrink: 0, height: navbarHeight }}
          >
            <NavbarBrand tag={Link} to="/">
              Workspace
            </NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/workspace">
                  Viewer
                </NavLink>
              </NavItem>
              <NavItem style={{position:'absolute',right:'0%',top:'7%'}}>
                <NavLink tag={RRNavLink} to="/knowme">
                  <Button style={{borderRadius:'45%'}} color="outline-light">?</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <div
            style={{ height: `calc(100% - ${navbarHeight})`, overflow: 'none' }}
          >
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/workspace" component={WorkspacePage} />
              <Route exact path="/knowme" component={Knowme}/>
              <Route exact path="/workspace/:id" component={WorkspacePage} />
              <Route exact path="/share/:id" component={SharePage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
