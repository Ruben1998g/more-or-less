import React, { Component } from 'react';
import'./game-page.css';


export default class GamePage extends Component{
    
    render(){
        let {data} = this.props;
        const {num} = data;

        const ndata = data.data;





        const img1 = `img/${num+1}.jpg`;
        const img2 = `img/${num+1+1}.jpg`;

        console.log(this.props);

        return(
        <div className='container-start'>
            <div className="left">
            <img src={img1}/>
                <div className="con">
                    
                    <h2 className="start-name">{ndata[num].name}</h2>
                    <p className="start-p">имеет</p>
                        <h1 className="start-cum">{ndata[num].col}</h1>
                    <p className="start-info">запросов в месяц</p>
                </div>
            </div>

            <div className="right">
            <img src={img2}/>
                <div className="con">
                
                <h2 className="start-name">{ndata[num+1].name}</h2>
                <p className="start-p">имеет</p>
                <div>
                    <div className="main-div"><a className="main-how main-how-pl" onClick={(e)=>this.props.onChange(e,0)} >Больше +</a></div>
                    <div className="main-div"><a className="main-how  main-how-pl" onClick={(e)=>this.props.onChange(e,1)}>Меньше -</a></div>
                </div>
                <p className="start-info">запросов, чем {ndata[num].name}</p>
                </div>
            </div>
            <h3 className="records">Счет: {this.props.data.count}</h3>
            
         </div>
        )
}

}