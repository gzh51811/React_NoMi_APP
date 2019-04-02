import React, { Component } from 'react';
import { Icon } from 'antd';

class hotf extends Component {
    render() {
        return <div className="hotf">
            <h2 className="fan-header border border-bottom">
                <span className="text">热门饭圈</span>
                <span className="more-link" data-log="{&quot;da_src&quot;: &quot;fanReload&quot;}"><Icon type="reload" /></span>
            </h2>
        </div>
    }
}
export default hotf;