import React from "react";
import "./App.css";
import UserItem from './components/UserItem';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      name: "",
      email:"",
      users:[],
    };
    this.handleNamechange=this.handleNamechange.bind(this);
    this.handleEmailchange=this.handleEmailchange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleNamechange(i){
   this.setState({name:i.target.value});
   console.log(this.state.name);  
  }
  handleEmailchange(i){
    this.setState({email:i.target.value});
    console.log(this.state.email);

  }
  handleSubmit(i){
    i.preventDefault();
    let newUser={name:this.state.name,email:this.state.email};
    this.setState({users: [...this.state.users, newUser]});
  }
  

  render() {
    return (
      <div className="App">
        {/* Form to add new user */}
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" value={this.state.name}
            onChange={this.handleNamechange}
            /> 
            <br />
            <input type="email" placeholder="Email" value ={this.state.email}
            onChange={this.handleEmailchange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>

        {/* List of users */}
        <div>
         {this.state.users.map((user, index) => (<UserItem key={index} name={user.name}email={user.email}/>
         ))}
        </div>
      </div>
    );
  }
}

export default App;
