import React from 'react';

import { Icon } from 'antd';

let Scene=()=>{
    let data=[
        {
            id:1,
            title:'Beatrich 2019 China Tour 广州站',
            img:'timg (1).jpg',
            time:'2019-05-20',
            site:'广州市.MAO LIVEHOUSE',
            price_min:380,
            price_max:980,
        },
        {
            id:2,
            title:'第24届春季广州国际艺术博览会',
            img:'timg (2).jpg',
            time:'2019-06-21',
            site:'广州市.广州国际艺术博览会',
            price_min:280,
            price_max:1280,
        },
        {
            id:3,
            title:'刘浩龙2019广州音乐会',
            img:'timg (3).jpg',
            time:'2019-05-11',
            site:'广州市.中山纪念堂',
            price_min:180,
            price_max:1250,
        },
        {
            id:4,
            title:'北爱尔兰阿玛假面吟唱亲子互动音乐会',
            img:'timg (4).jpg',
            time:'2019-05-16',
            site:'广州市.广州大剧院',
            price_min:80,
            price_max:250,
        },
        {
            id:5,
            title:'一万天荒爱未老 周慧敏30周年演唱会 广州站',
            img:'timg (5).jpg',
            time:'2019-06-29',
            site:'广州市.广州体育馆',
            price_min:280,
            price_max:2130,
        }
    ]

    console.log(data)

    return <div className="scene">
                <h3>热门排行榜</h3>
                {data.map(item=>{
                    return <div className="scene_item" key={item.id}>
                                <section className="item_l"><img alt="" src={require('../../assets/'+item.img)}/></section>
                                <section className="item_r">
                                    <h3>{item.title}</h3>
                                    <p><Icon type="dashboard" />{item.time}</p>
                                    <p><Icon type="environment" />{item.site}</p>
                                    <span>￥{item.price_min} - ￥{item.price_max}</span>
                                    <span className="shoupiao">售票中</span>
                                </section>
                            </div>
                })}
            </div>
}

export default Scene;