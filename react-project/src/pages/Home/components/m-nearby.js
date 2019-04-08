import React, { Component } from 'react';
// import {Icon} from 'antd';
class mnearby extends Component {
    render() {
        return <div className="mod m-nearby">
            <div className="list">
                <a className="item touching " href="/cinema/detail?cinemaId=8077" data-log="{&quot;da_src&quot;: &quot;cinemaItemLink&quot;}">
                    <h3>
                        <span className="cinema-name">广州增城万达广场店</span>
                    </h3>
                    <div className="cinema-info">
                        <p className="cinema-addr">广州市增城区荔城街增城大道69号万达广场1幢娱乐楼4A-5A</p>
                    </div>
                </a>
                <a className="item touching " href="/cinema/detail?cinemaId=753" data-log="{&quot;da_src&quot;: &quot;cinemaItemLink&quot;}">
                    <h3>
                        <span className="cinema-name">大地影院(广州东汇城店)</span>
                    </h3>
                    <div className="cinema-info">
                        <p className="cinema-addr">广州市增城市荔城街府佑路98号东汇城4楼</p>
                    </div>
                </a>
                <a className="item touching " href="/cinema/detail?cinemaId=318" data-log="{&quot;da_src&quot;: &quot;cinemaItemLink&quot;}">
                    <h3>
                        <span className="cinema-name">广州星汇电影城</span>
                    </h3>
                    <div className="cinema-info">
                        <p className="cinema-addr">广州市越秀区西湖路63号光明广场7楼(公园前步行街)</p>
                    </div>
                </a>
            </div>
            <div className="more-cinema touching border border-top" data-log="{&quot;da_src&quot;: &quot;cinemaAll&quot;}">
                全部影院 <i className="icon-aw"></i>
            </div>
        </div>
    }
}
export default mnearby;