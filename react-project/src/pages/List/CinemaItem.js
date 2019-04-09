import React from 'react';
import {  } from 'antd';

let CinemaItem = ()=>{
    return <div className="cinemaItem">
            <div>
                <h3>广州增城万达广场店</h3>
                <p>广州市增城区荔城街增城大道69号万达广场1幢娱乐楼4A-5A</p>
                <div className="feature">
                    <span>座</span><span>IMAX厅</span>
                </div>
                <div className="discounts">
                    <span>惠</span>
                    <div className="discounts_option">
                        <span>雷霆沙赞！特惠购票 | 度小满新客最高减3元</span>
                    </div>
                    <div className="starting_price">
                        <span><em>￥35</em>&nbsp;起</span>
                    </div>
                </div>
            </div>
        </div>
}

export default CinemaItem;