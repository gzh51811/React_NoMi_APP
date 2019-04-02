import React, { Component } from 'react';
import {Icon} from 'antd';

class r_icon extends Component {
    render() {

        return <nav className="r-icons">
            <div className="menu-item touching" data-url="/card/index" data-log="{&quot;da_src&quot;: &quot;icon_3&quot;}">
                <div className="portal-icon-wrapper">
                    <Icon type="credit-card" />
                </div>
                <span className="text">会员卡</span>
            </div>
            <div className="menu-item touching" data-url="/mall/index" data-log="{&quot;da_src&quot;: &quot;icon_10&quot;}">
                <div className="portal-icon-wrapper">
                    <Icon type="shopping" />
                </div>
                <span className="text">商城</span>
            </div>
            <div className="menu-item touching" data-url="/video/index" data-log="{&quot;da_src&quot;: &quot;icon_4&quot;}">
                <div className="portal-icon-wrapper">
                    <Icon type="play-circle" />
                </div>
                <span className="text">视频</span>
            </div>
            <div className="menu-item touching" data-url="https://piaofang.baidu.com?sfrom=wise_shoubai&amp;da_channel=wise&amp;da_client=lightapp&amp;da_module=shoubai" data-log="{&quot;da_src&quot;: &quot;icon_5&quot;}">
                <div className="portal-icon-wrapper">
                    <Icon type="trophy" />
                </div>
                <span className="text">票房</span>
            </div>
        </nav>
    }
}
export default r_icon;