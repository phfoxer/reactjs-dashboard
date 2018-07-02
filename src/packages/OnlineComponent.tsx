import * as React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Icon } from './general/assets/Icon';
import './OnlineComponent.css';
interface IOn {
    changeLink: (s: string) => void;
}
// npm run build
export class OnlineTemplate extends React.Component<IOn, any> {
    public menu: any[];
    public appName: string = "AdvSis";
    constructor(props: any) {
        super(props);
        this.state = { activedMenu: 0 };
        this.menu = [
            { id: 1, name: 'Página inicial', link: '/', icon: 'home', childrens: [] },
            {
                id: 2,
                name: 'Administrativo',
                icon: 'cog',
                link: null,
                childrens: [
                    { name: 'Usuários', link: '/settings/users', icon: 'home' },
                    { name: 'Perfis', link: '/settings/profile', icon: 'home' },
                    { name: 'Permissões', link: '/settings/permission', icon: 'home' }
                ]
            }
        ];
    }

    public openMenu(i: any) {
        if (i.link !== null) {
            this.props.changeLink(i.link);
        }
        if (i.link === null && i.id > 0) {
            if (this.state.activedMenu === i.id) {
                this.setState({
                    activedMenu: 0
                });
            } else {
                this.setState({
                    activedMenu: i.id
                });
            }
        }
    }

    public render() {
        return (<div>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 box-shadow">
                <a className="navbar-brand col-md-2 mr-0" href="/">{this.appName}</a>
                <ul className="nav nav justify-content-end col-md-8">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            Notificações <span className="badge badge-light">0</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mensagens <span className="badge badge-light">0</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Minha conta</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">Sair</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <Router>
                            <div className="sidebar-sticky">

                                <ul className="nav flex-column">
                                    {
                                        this.menu.map((item, i) => {
                                            return <div key={i}>
                                                <li className="nav-item bg-dark">
                                                    {
                                                        (item.link) ?
                                                            <NavLink exact={true} activeClassName="active" onClick={this.openMenu.bind(this, item)} className="nav-link" to={item.link}>
                                                                <Icon name={item.icon} size={16} /> {item.name}
                                                            </NavLink>
                                                            :
                                                            <a onClick={this.openMenu.bind(this, item)} className="nav-link">
                                                                <Icon name={item.icon} size={16} /> {item.name}
                                                            </a>
                                                    }
                                                </li>
                                                {
                                                    (item.childrens) ?
                                                        <ul id={'menu' + item.id} className={(this.state.activedMenu === item.id) ? "nav flex-column flex-children" : "nav childen-header flex-column flex-children"}>
                                                            {item.childrens.map((e: any, k: number) => {
                                                                return <li key={k}>
                                                                    <NavLink exact={true} activeClassName="active" onClick={this.openMenu.bind(this, e)} className="nav-link" to={e.link}>{e.name}</NavLink>
                                                                </li>;
                                                            })}
                                                        </ul>
                                                        : null

                                                }
                                            </div>
                                        }
                                        )
                                    }
                                </ul>
                            </div>
                        </Router>
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <Router>
                            <Switch>
                                <Route path='/' component={Olar} />
                            </Switch>
                        </Router>
                    </main>
                </div>
            </div>
        </div>)
    }
}