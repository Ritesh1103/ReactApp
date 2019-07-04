import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


  class App extends Component{
    state={
      person:[{id:'rit01', name:"ritesh" ,age:25},{id:'rah02',name:"rahul" , age:35},{id:'ra03',name:"ravi",age:45}
       ] ,
       otherstate:'Some other value',
       showPersons: 'False'
      }


        

      nameChangeHandler=(event,id)=>{
   
        const personIndex=this.state.person.findIndex(p=>{
              return p.id===id;  
        });
         const persons={
           ...this.state.person[personIndex]
         };
         persons.name=event.target.value;
         const person=[...this.state.person];
         person[personIndex]=persons;
        this.setState({
          person:person
        })
      }

       deletepersonHandler=(personIndex)=>{
       //   const person=this.state.person.slice();
          const person=[...this.state.person];
          person.splice(personIndex,1);
          this.setState({person:person})   
       }
           
      togglePersonsHandler=()=>{
      const doesShow=this.state.showPersons;
      this.setState({showPersons:!doesShow})
      }
 
    render(){
          const style={
            backgroundColor:'Green',
            color:'white',
            padding:'6px',
            font:'inherit',
            border:'1px solid blue',
            cursor:'Pointer'
          };
             
             let person=null;
             if(!this.state.showPersons){
                 
               person= (
                   
                 <div>
                   {this.state.person.map((persons,index)=>{
                     return <Person 
                      click={()=>this.deletepersonHandler(index)}  
                     name={persons.name}  age={persons.age} key={persons.id} changed={(event)=>this.nameChangeHandler(event,persons.id)}/>
                   })}
                 </div>  
               )
               style.backgroundColor = "red";
             }
            
      return(
        <div className="App">hi I am class component
          <h1>hello how are you</h1>
          <p>welcome to the react</p>
           <button style={style}
          onClick={this.togglePersonsHandler}  >Button</button>
          {person}
         
  
        </div>
      );
    }
  }


     
// function App() {
//   return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //         <Abc name='Ritesh'/>
  //         <A/>
  //       </a>
  //     </header>
  //   </div>
  // );
  //   React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does it work', <Person />, <Person />, <Person />))
  // )}

export default App;
