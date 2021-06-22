import React, { Component } from 'react';
import'./end-page.css';

export default class EndPage extends Component{
    
    render(){


        return(
  

            <div className='container'
            style={{ backgroundImage: `url('https://mruben.ru/portfol/more-or-less/img/logo.png')` }}
            >
              <div className="container-block">
                <img src='https://mruben.ru/portfol/more-or-less/img/sprite.png' className="sprite"/>
                <h2 className="main-h2">Твой счет:</h2>
                <h1 className="main-h1">{this.props.num}</h1>
            
                <div className="main-div"><a className="main-how" onClick={this.props.onStart}>Еще раз</a></div>
              </div>
             </div>
        )
}

}