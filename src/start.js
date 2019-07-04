
import React,{Component} from 'react';

 class Abc extends Component{
    render(){
    
        return(
            <h1>{this.props.name}</h1>
            
        )
        }
}
   
 var A=()=>{
    return(
        <div>hi how are you??</div>
    )
   }

export {Abc,A};