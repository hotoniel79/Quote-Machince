import logo from './logo.svg';
import './App.css';
import React from "react";
import {connect} from "react-redux"
import {AppBar,Toolbar,Typography,Container, CssBaseline,Paper,Button} from "@material-ui/core";

class Counter extends React.Component{
render(){
    const colors=this.props.color
    return(
        <body style={{
            height:740,
            backgroundColor:colors
        }}>
      
        <AppBar position="relative" style={{backgroundColor:"black"}}>
            <Toolbar style={{
                fontSize:20
            }}>
                Random Quote Machine 
            </Toolbar>
        </AppBar>
            <div style={{backgroundColor:colors}}>
            <Container  align="center"style={{
                    padding:50
                }}>
                <Paper  align="center" elevation={4} style={{
                    padding:20,
                    height:"fit-content",
                    width:400
                }}>
            <Typography variant="h4" paragraph="true">{this.props.quote}</Typography>
            <h4>-{this.props.author}</h4>
            <Button  variant="outlined" style={{backgroundColor:colors,
            margin:20, color:"white",border:"none"}} onClick={this.props.getNewQuote}>New Quote</Button>
            </Paper>
            </Container>
            </div>
        </body>
    )
}
}
const mapDispatchToProps = dispatch =>{
    return {
  getNewQuote:()=>{dispatch({type:"NEW"})}
}
}
const mapStateToProps= state=>({
    quote:state.quote,
    author:state.name,
    color:state.colors
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);