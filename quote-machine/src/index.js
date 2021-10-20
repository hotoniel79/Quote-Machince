import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import{Provider} from "react-redux"
const NEW="NEW";

function newQuote(){
return{
   type:NEW
}
}

const quote={
  "Joe Girard":{ 
    words:"The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
color:"orange"},
"Zig Zigar":{
  words:"People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
color:"green"
},
"Lily Tomlin":{
  words:"I always wanted to be somebody, but now I realise I should have been more specific.",
color:"red"
},
"Oscar Wilde":{
  words:"I am so clever that sometimes I don’t understand a single word of what I am saying.",
  color:"grey"
},
"Winnie the Pooh":{
words:"People say nothing is impossible, but I do nothing every day",
color:"yellow"
},
"Tom Lehrer":{
  words:"Life is like a sewer… what you get out of it depends on what you put into it",
  color:"purple"
},
"Steven Wright":{
  words:"You can’t have everything. Where would you put it?",
  color:"aqua"
},
"Jeffrey Gitomer":{
   words:"Change is not a four letter word… but often your reaction to it is",
  color:"pink"
},
"Dalai Lama":{
  words:"If you think you are too small to make a difference, try sleeping with a mosquito",
  color:"teal"
},
"Ellis Vidler":{
  words:"Bad decisions make good stories",
  color:"lime"
},
"Cassandra Duffy":{
  words:"I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess",
  color:"orchid"
}
}
const authorNames=["Joe Girard","Zig Zigar","Lily Tomlin","Oscar Wilde","Winnie the Pooh","Cassandra Duffy","Ellis Vidler","Dalai Lama","Jeffrey Gitomer","Steven Wright","Tom Lehrer"]

let number=0

let length=authorNames.length-1;

function reducer(state=quote,action){
  if(action.type==NEW){
    number++
    if(number>length){
      number=0
    }
 return{
   quote:quote[authorNames[number]].words,
   name:authorNames[number],
   colors:quote[authorNames[number]].color
 }  
  }
  else{
   return{
     quote:state[authorNames[number]].words,
     name:authorNames[number],
     colors:state[authorNames[number]].color
  }
}
}
 

const store=createStore(reducer);

const NewApp=()=>(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(<NewApp/>,document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
