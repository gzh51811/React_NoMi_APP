import React,{Component} from 'react';
import { Button } from 'antd';

class FilmItem extends Component{
    constructor(){
        super();

        this.state = {
            
        }
        this.gotoGoods=this.gotoGoods.bind(this)
    };

    gotoGoods(id) {
        // console.log(this)
        let { history } = this.props;
        history.push({
            pathname: '/listitem/',
            search: '?id=' + id,
            state: {
                id
            }
        })
    };

    render(){
        let data = this.props.data
        // console.log(data)
        return <div className="item"  onClick={this.gotoGoods.bind(this, data.id)}>
                <section className="item_l"><img src={require('../../assets/'+data.imgurl)} alt=""/></section>
                <section className="item_r">
                    <h4>{data.filmTitle}</h4>
                    <p>{data.expect}人想看</p>
                    <div>
                        <div className="introduce">
                            <p>{data.title}</p>
                            <p>{data.filmIs}分钟，{data.type} </p>
                        </div>
                        <div className="buy_ticket"><Button>购票</Button></div>                 
                    </div>
                </section>
            </div>
    }
}

export default FilmItem;