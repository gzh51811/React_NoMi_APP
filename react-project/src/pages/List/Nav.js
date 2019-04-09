import React,{Component} from 'react';
import { Icon,Row,Col } from 'antd';

class Nav extends Component{
    constructor(){
        super();

        this.state={
            film:'active',
            cinema:''
        }
        this.navActive=this.navActive.bind(this);        
    }

    navActive(result){
        // console.log(result)
        if(result){
            this.setState({
                film:'active',
                cinema:''
            })
        }else{
            this.setState({
                film:'',
                cinema:'active'
            })
        }
    }
    
    render(){
        // console.log(this)
        let {bodyShow} = this.props.method;

        return <div className="nav">
                <Row>
                    <Col span={8} className="nav_l">广州市<Icon type="down" style={{marginLeft:'2px'}}/></Col>
                    <Col span={8} className="nav_c">
                        <span
                            className={this.state.film}
                            onClick={(event) => {
                                  bodyShow(true);
                                  this.navActive(true);}
                            }>影片</span>
                        <span
                            className={this.state.cinema}
                            onClick={(event) => {
                                  bodyShow(false);
                                  this.navActive(false);}
                            }>影院</span>
                    </Col>
                    <Col span={8} className="nav_r"><Icon type="search" style={{fontSize:'24px',verticalAlign: 'middle'}}/></Col>
                </Row>
            </div>
    }
}

export default Nav;