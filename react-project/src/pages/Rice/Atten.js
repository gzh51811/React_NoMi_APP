import React from 'react';

let Atten = ()=>{
    return <div className="Atten">
        <div className="Atten_img">
            <img src={require("../../assets/RiceError.png")} alt=""/>
            <p className="Atten_txt">没有新内容，快去关注更多圈子吧</p>
            <div className="Atten_btn">
                去关注
            </div>
        </div>
    </div>
}

export default Atten;