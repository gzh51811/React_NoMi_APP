import React, { Component } from 'react';
import * as Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
    import {Icon} from 'antd';

class show extends  Component {
    constructor(){
        super();
        this.state = {

        }
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            freeMode: true,
            slidesPerView: 3,
        })
    }
    render() {
        return <div className="mod m-show m-hot-show">
            <h2>
                <span className="text">热门演出</span>
                <span className="span_1">更多 <Icon type="right" /></span>
            </h2>
            <div className="scroller-wrap">
            {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide-active ">
                            <div className="show-img"><img src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f244_339&quality=60&name=yanchupiao&wh_rate=0&&di=102c5f86bf9d498010448c87655faaff&sec=0&imgtype=0&src=http://c.hiphotos.baidu.com/movie/pic/item/79f0f736afc3793128027a28e5c4b74543a9114c.jpg" /></div>
                            <p className="show-p">开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》</p>
                        </div>
                        <div className="swiper-slide swiper-slide-active ">
                            <div className="show-img"><img src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f244_339&quality=60&name=yanchupiao&wh_rate=0&&di=102c5f86bf9d498010448c87655faaff&sec=0&imgtype=0&src=http://c.hiphotos.baidu.com/movie/pic/item/79f0f736afc3793128027a28e5c4b74543a9114c.jpg" /></div>
                            <p className="show-p">开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》</p>
                        </div>
                        <div className="swiper-slide swiper-slide-active ">
                            <div className="show-img"><img src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f244_339&quality=60&name=yanchupiao&wh_rate=0&&di=102c5f86bf9d498010448c87655faaff&sec=0&imgtype=0&src=http://c.hiphotos.baidu.com/movie/pic/item/79f0f736afc3793128027a28e5c4b74543a9114c.jpg" /></div>
                            <p className="show-p">开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》</p>
                        </div>
                        <div className="swiper-slide swiper-slide-active ">
                            <div className="show-img"><img src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f244_339&quality=60&name=yanchupiao&wh_rate=0&&di=102c5f86bf9d498010448c87655faaff&sec=0&imgtype=0&src=http://c.hiphotos.baidu.com/movie/pic/item/79f0f736afc3793128027a28e5c4b74543a9114c.jpg" /></div>
                            <p className="show-p">开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》</p>
                        </div>
                        <div className="swiper-slide swiper-slide-active ">
                            <div className="show-img"><img src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f244_339&quality=60&name=yanchupiao&wh_rate=0&&di=102c5f86bf9d498010448c87655faaff&sec=0&imgtype=0&src=http://c.hiphotos.baidu.com/movie/pic/item/79f0f736afc3793128027a28e5c4b74543a9114c.jpg" /></div>
                            <p className="show-p">开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》</p>
                        </div>
                        <div className="swiper-slide swiper-slide-active ">
                            <div className="show-img"><img src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f244_339&quality=60&name=yanchupiao&wh_rate=0&&di=102c5f86bf9d498010448c87655faaff&sec=0&imgtype=0&src=http://c.hiphotos.baidu.com/movie/pic/item/79f0f736afc3793128027a28e5c4b74543a9114c.jpg" /></div>
                            <p className="show-p">开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》</p>
                        </div>
                        <div className="swiper-slide swiper-slide-active ">
                            <div className="show-img"><img src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f244_339&quality=60&name=yanchupiao&wh_rate=0&&di=102c5f86bf9d498010448c87655faaff&sec=0&imgtype=0&src=http://c.hiphotos.baidu.com/movie/pic/item/79f0f736afc3793128027a28e5c4b74543a9114c.jpg" /></div>
                            <p className="show-p">开心麻花2019爆笑贺岁舞台剧《窗前不止明月光》</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default show;