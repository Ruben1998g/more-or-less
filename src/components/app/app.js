import React, { Component } from 'react';
import './app.css'

import StartPage from '../start-page';
import GamePage from '../game-page';
import EndPage from '../end-page';


export default class App extends Component{

    state = {
        data:[
            {
                name: 'Оскар',
                col: 90500
            },
            {
                name: 'Cs Go',
                col: 185000
            },
            {
                name: 'Pewdipie',
                col: 2000000
            },
            {
                name: 'Samsung',
                col: 110100000
            },
            {
                name: 'Йога',
                col: 90000
            },
            {
                name: 'Макс +100500',
                col: 135000
            },
            {
                name: 'Вконтакте',
                col: 37200000
            }
            ,
            {
                name: 'Iphone',
                col: 5000000
            }
            ,
            {
                name: 'YouTube',
                col: 101000000
            }
            ,
            {
                name: 'Каратэ',
                col: 60000
            }
            
        ],
        num:0,
        ok:false,
        end:false,
        count:0
    }
    onStart = (e) =>{
        e.preventDefault();
        this.setState({
            num:0,
            ok:true,
            count:0
        });
    }

    onChange = (e, choice) =>{

        const {data, num} = this.state;

        if(num == 8){
            this.setState({num:0});
        }

        e.preventDefault();
        if(choice == 0){
            if(data[num].col < data[num+1].col){
                console.log('++');
                this.setState((state)=>{
                    let newnum = state.num+1;
                    let newcount = state.count+1;
                    console.log(newnum);
                    return {
                        num:newnum,
                        count:newcount
                    }
                });
                
            }else{
                this.setState({ok:false, end:true});
            }
        }

        if(choice == 1){
            if(data[num].col > data[num+1].col){
                console.log('++');
                this.setState((state)=>{
                    let newnum = state.num+1;
                    let newcount = state.count+1;
                    console.log(newnum);
                    return {
                        num:newnum,
                        count:newcount
                    }
                });
                
            }else{
                this.setState({ok:false, end:true});
            }
        }
    }
    

   render(){
    const data = this.state;

    


    if(this.state.ok === false && this.state.end === true){
        return(<EndPage onStart={this.onStart} num={this.state.count} />)
    }

    if(this.state.ok){
        return(
            <GamePage data={data} onChange={this.onChange}/>
        )
    }else{
        return(
            <StartPage onStart={this.onStart} count={this.state.count}/>
        )
    }

   }

};


