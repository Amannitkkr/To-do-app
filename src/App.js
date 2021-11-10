import './App.css';
import React,{Component} from 'react'




class App extends Component{
 
  constructor(props) {
    super(props)
  
    this.state = {
       newitem:"",
       list : []
    }
  }
  updateInput(key,value){
    this.setState({
      [key]:value
    })
  }
  additem(){
    const newitem={

      id:1+Math.random(),
      value: this.state.newitem.slice()


    }
    const list=[...this.state.list];
    list.push(newitem)
    this.setState({
      list,
      newitem:""
  })

    



  }
  deleteitem(id){
    const list=[...this.state.list];
    const updatedlist=list.filter(item=>item.id !== id);
    this.setState({
      list:updatedlist
    })
  }
  

  render(){
    
  
  return (
    <div className="App">
      
     
     <div class="titel">
        <h4 class="mytodo">My To-Do List</h4>
        <input class="textbox" type="text" placeholder="type item " value={this.state.newitem} onChange={(event)=>this.updateInput("newitem" ,event.target.value)}/>
        <button class="add" onClick={()=>this.additem()}>Add item</button>
        <div class="listbar">
        <ul>{
          this.state.list.map(item=>{
            return(
              <li class="list" key={item.id}>
                {item.value}
                <button class="delete" onClick={()=>this.deleteitem(item.id)}>X</button>
              </li>
            ) } )
            }
          </ul>
          </div>
      </div>  
    </div>
    
  
  
  );
}
}
export default App;
