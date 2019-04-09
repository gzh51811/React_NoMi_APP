import React,{Component} from 'react';
import { Row,Col,Carousel } from 'antd';

// import { ActivityIndicator } from 'react-native';

import FilmItem from './FilmItem';

import withAxios from '../../hoc/withAxios';

class Film extends Component{
    constructor(){
        super();

        this.state = {
            clientY:0,
            dataList:[],
            page:1
        }

        this.nextPage=this.nextPage.bind(this)
    };

    getData(qty,limit){
        return this.props.axios.get('/list',{
            params:{
                qty:qty,
                limit:limit
            }
        });
    }

    async componentWillMount(){
        let dataList = await this.getData(0,7);
        // console.log(dataList);
        this.setState({
            dataList:[...this.state.dataList,...dataList.data]
        })
    };

    async nextPage(qty,limit){
        console.log(qty,limit)
        let dataList = await this.getData(qty,limit);
        console.log(dataList.data)
        this.setState({
            page:this.state.page+1,
            dataList:[...this.state.dataList,...dataList.data]
        })
    }
    
    render(){
        // console.log(this);
        return <div className="film"
                    onTouchEnd={(e)=>{
                        if(document.documentElement.scrollTop>document.documentElement.clientHeight*this.state.page){
                            this.nextPage(this.state.page*7,7);
                            console.log(this.state.page);
                        }
                    }}
                >
                    <Row className="option">
                        <Col span={8} className=""><span className="active">热映中</span></Col>
                        <Col span={8} className=""><span>待上映</span></Col>
                        <Col span={8} className=""><span>已下线</span></Col>
                    </Row>
                    <Carousel className="carousel" autoplay>
                        <div><img width="100%" alt="" src={require('../../assets/timg.jpg')}/></div>
                        <div><img width="100%" alt="" src={require('../../assets/timg2.jpg')}/></div>
                        <div><img width="100%" alt="" src={require('../../assets/timg3.jpg')}/></div>
                    </Carousel>
                    { this.state.dataList.map(item=><FilmItem key={item.id} history={this.props.history} data={item}/>) }
                </div>
    }
}

Film=withAxios(Film);

export default Film;