import React,{Component} from 'react';

class Move extends Component{
        constructor(){
                super();
                this.state={
                        moveList:[
                                {
                                        name:'《地久天长》',
                                        content:'年轻的刘耀军（王景春 饰）和沈英明（徐程 饰）两家人本是挚友，两家儿子沈浩和刘星在郊外嬉戏中，耀军的儿子刘星意外身亡，此事彻底改变了两家人的命运。刘家夫妇远赴南方。多年后，容颜已老的他们再次相聚，隐藏的真相终将因为年轻一代人的坦荡而揭开。岁月流逝，生命滚滚向前……',
                                        imgurl:'Move_list1.png'
                                },
                                {
                                        name:'《紧急救援》',
                                        content:'《紧急救援》是由林超贤导演，彭于晏、王彦霖、辛芷蕾、蓝盈莹出演的中国首部海上救援打捞题材的作品。筹备过程中，导演林超贤带领团队实地勘察选址，力求打造更劲爆，更震撼的场景设置，本次与奥斯卡最佳摄影鲍德熹，《泰坦尼克号》美术指导Martin Laing等国际顶级制作团队的强强联合，预示着电影将成为首部打开国际市场的华语救援题材作品，也势必会成为又一部华语电影的标杆之作。',
                                        imgurl:'Move_list2.png'
                                },
                                {
                                        name:'《我们永不言弃》',
                                        content:'影片讲述了在拳坛上所向披靡的“死神”拳王周始，因一次意外被判入狱五年，等他出狱后妻子离世，只剩女儿周自在等他，自此后他与女儿相依为命，重铸父女之情，但年幼的女儿被发现患上了白血病，为了激励病痛中要放弃生志的女儿，也为了完成女儿对于他的期盼，已经36岁年龄的他又重返拳台，用血肉模糊的拳头一次次向女儿证明“永不言弃”。',
                                        imgurl:'Move_list3.png'
                                },
                                {
                                        name:'《雷霆沙赞！》',
                                        content:'每个人身体里都潜藏着一位超级英雄，只需要一点魔力便能将其释放。14岁的街头小混混比利·巴特森(亚瑟·安其 饰)通过大喊“沙赞”这个词，就可以变身为成年超级英雄沙赞(扎克瑞·莱维 饰)，这是一种来自于古老巫师的恩惠。如神一般的肌肉身体里，仍存有一颗孩子心，他开心地与超能力为伴。他能飞吗？他能X光透视吗？他能从手中射出闪电吗？他能不用再考试了吗？沙赞以孩子般轻率又鲁莽的方式，开始测试他的能力极限。但他需要尽快掌握这些力量，以对抗塞迪斯·希瓦纳博士（马克·斯特朗 饰）控制的邪恶势力。',
                                        imgurl:'Move_list4.png'
                                },
                                {
                                        name:'《叶问4》',
                                        content:'远赴美国开馆的小龙因授武予洋人得罪当地人马，叶问现身引导小龙以武震慑整个唐人街，以德令华洋各路折服，懂得武术贵乎共融，成为真正宗师…',
                                        imgurl:'Move_list5.png'
                                },
                        ]  
                }
        }
        render(){
                return (
                        <div className = "Move" >
                                <div className = "Move_head" >
                                        <ul className = "Move_head_ul" >
                                       
                                                <li>
                                                        <span  className="Moveactive">热门</span>
                                                </li>
                                                <li>
                                                        <span>电影</span>
                                                </li>
                                                <li>
                                                        <span>影人</span>
                                                </li>
                                                <li>
                                                        <span>演出</span>
                                                </li>
                                        </ul>
                                </div>
                                <div className = "Move_list" >
                                        <div className = "Move_list_item" >
                                        {
                                                this.state.moveList.map(item => <div className = "Move_list_item" key={item.name}>
                                                        <h2>
                                                                {item.name}预告片抢先看
                                                        </h2>
                                                        <div className="content">
                                                        {item.content}
                                                        </div>

                                                        <div className="img">
                                                        <img src={require('../../assets/'+item.imgurl)} alt=""/>
                                                        </div>
                                                        <div className="foot">
                                                                <div className="footitem left">
                                                                        <i>影</i>
                                                                        <span>影片抢先看</span>
                                                                </div>
                                                                <div className="footitem right">
                                                                        3月19日
                                                                </div>
                                                        </div>
                                                </div>)
                                        }
                                               
                                        </div>
                                </div>
                        </div>
                )
        }
}

export default Move;