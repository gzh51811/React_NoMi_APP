import React, { Component } from 'react';
import { Icon } from 'antd';

class payer extends Component {
    render() {
        return <div className="fan-post" data-log-extra="{&quot;goodsId&quot;:24859517,&quot;algorithmName&quot;:&quot;coming_trailer&quot;,&quot;uid&quot;:794962349,&quot;topicTag&quot;:[]}" data-fr="portal/recommend" data-id="24859517" data-subjectid="123047" data-type="6" data-hidefrom="" data-tags="视频,预告片,电影视频">
            <div className="fan-post-inner touching">
                <div className="inner-main">
                    <div className="header">
                    </div>
                    <h2 className="title ">
                        <span>《复仇者联盟4：终局之战》预告片抢先看,4月24日上映</span>
                    </h2>
                    <div className="content ">改编自漫威漫画，也是漫威电影宇宙第22部影片。由安东尼·罗素和乔·罗素执导，小罗伯特·唐尼、乔什·布洛林、马克·鲁法洛、汤姆·希德勒斯顿、克里斯·埃文斯、汤姆·赫兰德等主演。</div>
                    {/* 如果有视频，展示视频样式，否则展示图片样式，这两者不会同时存在*/}
                    <div id="video-post">
                        <div className="video-content" data-url="https://dispatcher.video.iqiyi.com/common/shareplayer.html?vid=f547887e75313c1ec0f8852d2e9ae1a2&amp;tvId=1667357100&amp;coop=coop_133_nmw&amp;cid=qc_105105_300490&amp;aid=1667357100&amp;bd=1&amp;fullscreen=1" data-buy="" data-movie-id="95711" style={{backgroundImage: "url(&quot;https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/00e93901213fb80ec446e6643bd12f2eb83894ea.jpg&quot;)"}}>
                            <div className="video-content-mask"></div>
                            <div className="video-content-length count-info">02:27</div>
                            <div className="play-btn"><Icon type="right" />  </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}
export default payer;