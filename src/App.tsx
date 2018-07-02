import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { OnlineTemplate } from './packages/OnlineComponent';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      link: false
    }
    this.onNavigate = this.onNavigate.bind(this);
  }

  public componentDidUpdate() {

    const Olar = (n: any) => {
      return <p>x</p>;
    };

    return (<OnlineTemplate changeLink={this.onNavigate} />);
  }



  public render() {
    const Loading = () => <div>Loading...</div>;
    const Home = Loadable({
      loader: () => import('./packages/home/homeComponent'),
      loading: Loading,
      render(loaded: any, prop: any) {
        // const id: number = props.match.params.id;
        return <loaded.HomeComponent />;
      }
    });

    const Users = Loadable({
      loader: () => import('./packages/users/UsersComponent'),
      loading: Loading,
      render(loaded: any, prop: any) {
        return <loaded.UsersComponent />;
      }
    });

    const Login = Loadable({
      loader: () => import('./packages/login/Login'),
      loading: Loading,
      render(loaded, prop: { user: any }) {
        return <loaded.Login />;
      }
    });

    const Sair = (n: any) => {
      localStorage.clear();
      window.location.href = '/';
      return null;
    };

    if (localStorage.getItem('token')) {
      return (<OnlineTemplate changeLink={this.onNavigate}>
        <Router>
          <Switch>
            <Route path='/settings/users' component={Users} />
            <Route path='/logout' component={Sair} />
            <Route exact={true} path='/' component={Home} />
          </Switch>
        </Router>
      </OnlineTemplate>
      )
    } else {
      return (
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Login} />
          </Switch>
        </Router>
      )
    }
  }

  public onNavigate(l: string): void {
    this.setState({ link: l });
  }

}

export default App;
