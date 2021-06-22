import React, { Component } from 'react';
import'./start-page.css';



export default class StartPage extends Component{
    
    render(){
     


        return(
          <div className='container'
          style={{ backgroundImage: `url('https://mruben.ru/portfol/more-or-less/img/logo.png')` }}
          >
              
          <div className="container-block">
            <img src='https://mruben.ru/portfol/more-or-less/img/sprite.png' className="sprite"/>
            <h1 className="main-h1">Что гуглят больше?</h1>
            <h2 className="main-h2">Как играть?</h2>
            <p className="main-description">Выберите, что искали больше, а что меньше.</p>
            <div className="main-div"><a className="main-how" onClick={this.props.onStart}>Играть</a></div>
          </div>
         </div>
        )
}

}