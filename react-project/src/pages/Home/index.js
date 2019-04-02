import React from 'react';

import Search from './components/search';
import TopBar from './components/top-bar';//轮播图_1
import Ricons from './components/r-icons';
import Mlayers from './components/m-layers';
import Mnearby from './components/m-nearby';
// 推荐部分
import Mshow from './components/m-show'; //轮播图_3
// 热门饭圈
import Payer from './components/payer';
import Hotf from './components/hotF';
import Message from './components/message';


import './home.css';

let Home = ()=>{
    return <div className="Home">
        <Search />
        <TopBar />
        <Ricons />
        <Mlayers />
        <Mnearby />
        <div className="recommend">
            {/* 推荐部分 */}
            <Mshow />
            <Mshow />
            <Mshow />
            {/* 热门饭圈 */}
            <Hotf />
            <Payer />
            {/* 商城推荐帖  */}
            <Message/>
        </div>
    </div>
}

export default Home;