import * as React from 'react';
import './Login.css';

export class Login extends React.Component {
    private user: any = { username: '', password: '' };
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    public componentWillMount(){
        // 
    }

    public handleChangeUsername(event: any) {
        this.user.username = event.target.value;
        event.preventDefault();
    }

    public handleChangePassword(event: any) {
        this.user.password = event.target.value;
        event.preventDefault();
    }

    public handleSubmit(event: any) {
        localStorage.setItem('token', '123');
        window.location.href = '/';
        event.preventDefault();
    }

    public render() {
        return (
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal text-center">Adv Login</h1>
                <label htmlFor="username" className="sr-only">Email</label>
                <input id="username" onChange={this.handleChangeUsername} type="email" className="form-control" placeholder="Email" required={true} />
                <label htmlFor="password" className="sr-only">Senha</label>
                <input id="inputPassword" onChange={this.handleChangePassword} type="password" className="form-control" placeholder="******" required={true} />
                <div className="checkbox mb-3">
                    <label><input type="checkbox" value="remember-me" /> Lembrar login</label>
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary btn-block" type="submit">Entrar</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        );

    }
}