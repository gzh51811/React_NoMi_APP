import React, { Component } from 'react';
import { connect } from 'react-redux'
import './List.css';
class List1 extends Component {

    ogItem(){
        console.log(this.props)
        this.props.history.push({
            pathname: '/itemsite'
        })
    }

    render() {
        console.log(this);

        return (

            <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <div style={{ width: '100%', height: '200px', background: 'rgba(0,0,0,.5)' }}>
                    <div style={{ width: '100%', height: '160px' }}>
                        <div style={{ width: '35%', height: '160px', float: 'left', padding: '5%' }}>
                            <img style={{ height: '100%' }} src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b251_2478125&quality=80&name=cmoive&di=c7bc6019941a244a6703250d80db9eea&sec=0&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fcdbf6c81800a19d8f0d7e3003dfa828ba71e46da.jpg" alt="" />
                        </div>
                        <div style={{ width: '65%', height: '160px', float: 'left', padding: '2%' }}>
                            <dl style={{ color: '#ffffff' }}>
                                <dt>
                                    <span>反贪风暴4</span>
                                </dt>
                                <dd style={{ color: '#ff7e00' }}>
                                    <span>3463</span>
                                    <span >人想看</span>
                                </dd>
                                <dd>
                                    <h5 style={{ color: '#ffffff' }}>卧底牢狱 闯牢打虎</h5>
                                    <h5 style={{ color: '#ffffff' }}>类型:剧情,动作,犯罪</h5>
                                    <h5 style={{ color: '#ffffff' }}>参考片长:98分钟</h5>
                                    <h5 style={{ color: '#ffffff' }}>上映:2019-04-04</h5>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div style={{ height: '40px' }}>
                        <div style={{ width: '30%', height: '70%', float: 'left', margin: '2% 10%', border: '1px #ffffff solid', textAlign: 'center', borderRadius: '10px', color: '#ffffff' }}>想看</div>
                        <div style={{ width: '30%', height: '70%', float: 'left', margin: '2% 10%', border: '1px #ffffff solid', textAlign: 'center', borderRadius: '10px', color: '#ffffff' }} onClick={this.ogItem.bind(this)}>购票</div>
                    </div>
                    <div>
                        <p style={{ padding: '2%', fontSize: '12px' }}>廉政公署收到报案人廖雨萍（周秀娜 饰）的实名举报，举报正在坐牢的富二代曹元元（林峯 饰）涉嫌行贿监狱里的监督沈济全（谭耀文 饰）以及惩教员，首席调查主任陆志廉（古天乐 饰）决定深入虎穴，卧底狱中。在监狱里，被陆志廉送入监狱的前警司黄文彬（林家栋 饰）以及曹元元两大帮派势成水火，陆志廉趁机接近曹元元取得信任。同时监狱外的廉政公署总调查主任程德明（郑嘉颖 饰）、国内反贪局行动处处长洪亮（丁海峰 饰）也陆港联手，通力合作，最终成功破获贪腐行贿大案。</p>
                    </div>

                    <div style={{ width: '100%', height: '55px', marginTop: '2%', marginBottom: '2%', borderTop: '1px #686868 solid', borderBottom: '1px #686868 solid' }}>
                        <div style={{ float: 'left', width: '60%', height: '55px', paddingLeft: '5%' }}>
                      
                      <div >糯米电影卡</div>
                            <div >一卡多用，赠送好友</div>
                        </div>
                        <div style={{ float: 'left', width: '40%', height: '55px', lineHeight: '40px', textAlign: 'center',position:'relative' }}>
                           <dir style={{ color:'#bf974d',border:'1px solid #bf974d',borderRadius:'20px', width: '60px', height: '25px',lineHeight:'25px',position:'absolute',top:'20%',right:'5%'}}>购卡</dir> 
                        </div>
                    </div>

                    <div style={{ width: '100%', height: '120px', paddingBottom: '10%' }}>
                        <h3 style={{ paddingLeft: '1%', width: '100%', height: '20px' }}>演员表</h3>
                        <ul style={{ width: '100%', height: '90px' }}>
                            <li style={{ float: 'left', marginLeft: '2%', height: '90px' }}><img style={{ height: '90px' }} src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f66_95&quality=80&name=cmoive&di=561136eb9e4ffb3514f162654293d714&sec=0&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F03087bf40ad162d92c6217a116dfa9ec8b13cdfb.jpg" alt="" /></li>
                            <li style={{ float: 'left', marginLeft: '2%', height: '90px' }}><img style={{ height: '90px' }} src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f66_95&quality=80&name=cmoive&di=c00c43363f4f1d61be9b241f8b578ba3&sec=0&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fcb8065380cd79123265e1179a4345982b2b78005.jpg" alt="" /></li>
                            <li style={{ float: 'left', marginLeft: '2%', height: '90px' }}><img style={{ height: '90px' }} src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f66_95&quality=80&name=cmoive&di=812915cd3e85d8f7c3d09d72916649b8&sec=0&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Ff9198618367adab49a7e186883d4b31c8701e46b.jpg" alt="" /></li>
                            <li style={{ float: 'left', marginLeft: '2%', height: '90px' }}><img style={{ height: '90px' }} src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f66_95&quality=80&name=cmoive&di=bc45e2c100e26c4ac44f6375bbb39c54&sec=0&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F2cf5e0fe9925bc31031700d459df8db1cb137037.jpg" alt="" /></li>
                            <li style={{ float: 'left', marginLeft: '2%', height: '90px' }}><img style={{ height: '90px' }} src="https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f66_95&quality=80&name=cmoive&di=4da0626c874514a639ba5c8ffd443cd2&sec=0&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fd439b6003af33a87846bdc6ac15c10385343b5b8.jpg" alt="" /></li>
                        </ul>
                    </div>


                </div>





            </div>



        );
    }
}


export default connect(
    (state) => {
        return state
    },
    (dispatch) => {
        return {
            // setAuthor(){
            //     console.log(this)
            //     dispatch({
            //         type: "setAuthor",
            //         author: this.state.author
            //     })
            // }
        }
    }
)(List1)


