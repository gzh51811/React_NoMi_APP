import React, { Component } from 'react';
import './login.css';
import {Icon,message} from 'antd';
import withAxios from '../../hoc/withAxios';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username:"",
            password:"",
        }
    }
    loginPhone(e){
        let val = e.target.value;
        this.setState({
            username:val
        })
    }
    loginPsw(e){
        let val = e.target.value;
        this.setState({
            password:val
        })
    }
    loginBtn(){
        let user = this.state.username;
        let psw = this.state.password;
        if(user && psw ){
            this.props.axios.post("/login",{
                params:{
                    username:user,
                    password:psw,
                }
            }).then((res)=>{
                // console.log(res.data);
                if(res.data.code === 1){
                    message.error('您输入的账号或密码错误，登录失败');
                }else if(res.data.code === 0){
                    let token = JSON.stringify(res.data);
                    localStorage.setItem('user',token);
                    message.success('登录成功');
                    this.props.history.push('/home');
                }
            })
        }else{
            message.error('用户名或密码不能为空');
        }
    }
    gotoReg(){
        this.props.history.push('/reg');
    }
    loginClose(){
        let login_phone = document.querySelector('.login_phone');
        login_phone.value = "";
        this.setState({
            username:""
        })
    }
    loginSee(){
        let login_psw = document.querySelector('.login_psw');
        // console.log(login_psw.type);
        if(login_psw.type === 'password'){
            login_psw.type = "text";
        }else{
            login_psw.type = "password";
        }
    }
    render(){
        return <div className="login">
            <h2>
                <img alt="" src="data:image/png;base64,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" />
            </h2>
            <div className="login_input">
                <input type="text" 
                placeholder="请输入手机号码" 
                onChange={this.loginPhone.bind(this)}
                className="login_phone"/>
                <Icon type="close" onClick={this.loginClose.bind(this)}/>
            </div>
            <div className="login_input">
                <input type="password" 
                placeholder="请输入密码" 
                onChange={this.loginPsw.bind(this)}
                className="login_psw"/>
                <Icon type="eye" onClick={this.loginSee.bind(this)}/>
            </div>
            <div className="login_btn">
                <button onClick={this.loginBtn.bind(this)}>登录</button>
            </div>
            <p className="login_p">
                <a href="####" className="login_a1">登录遇到问题</a>
                <a href="####" className="login_a2">其他登录方式</a>
            </p>
            <div className="to-reg" onClick={this.gotoReg.bind(this)}>立即注册</div>
        </div>
    }
}
Login = withAxios(Login);
export default Login;