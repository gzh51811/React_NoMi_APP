import React, { Component } from 'react';
import { Input,Button,message } from 'antd';
import withAxios from '../../hoc/withAxios';
import './login.css';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            user:"",
            psw:""
        }
    }
    inUser(e){
        let val = e.target.value
        if(val){
            this.setState({
                user:val
            })
        }
    }
    inPsw(e){
        let val = e.target.value
        if(val){
            this.setState({
                psw:val
            })
        }
    }
    inBtn(){
        let username = this.state.user;
        let password = this.state.psw;
        // console.log(username,password);
        this.props.axios.post('/login',{
            params:{
                username,
                password
            }
        }).then((res)=>{
            if(res.data.code == 1){
                message.error('您输入的账号或密码错误，登录失败');
            }else if(res.data.code == 0){
                let token = JSON.stringify(res.data);
                localStorage.setItem('user',token);
                message.success('登录成功');
                this.props.history.push('/home');
            }
        });
    }
    render(){
        return <div className="Login">
        <h1 className="login_h1">糯米电影后台管理系统</h1>
            <div className="Login_box">
                <Input size="large" className="login_user" defaultValue={this.state.user} onBlur={this.inUser.bind(this)} placeholder="请输入用户名" />
                <Input size="large" className="login_psw" defaultValue={this.state.psw} onBlur={this.inPsw.bind(this)} placeholder="请输入密码" />
                <Button type="primary" className="login_btn" onClick={this.inBtn.bind(this)}>登录</Button>
            </div>
        </div>
    }
}
Login = withAxios(Login);
export default Login;