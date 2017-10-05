
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import {login} from './../../helpers.jsx';


class Login extends React.Component {
	
	 
    constructor () {
        super();
        this.state = {  email: '',
                        password: '',
                        message:''
                     }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      login(this.state.email,this.state.password)
      .then((user) => {
        console.log(user);
        this.props.isAuthenticated();
          
      })
      .catch((error) => {
        this.setState({message: error.message});
      })
    }
      
	render() {
	  
	  
		return (<article>
        
		   <h2>Login</h2>
        		<form onSubmit={this.handleSubmit}>
                    Email   
                    <input 
                      value={this.state.email}    
                      onChange={this.handleChange} 
                      name="email"    
                      type="email" 
                      placeholder="email@domain.com"/>
                      <br />
                    Password    
                    <input 
                      value={this.state.password}     
                      onChange={this.handleChange} 
                      name="password"    
                      type="password" 
                      placeholder="password" />
                      <br />
                    <button>Send Message</button>
              </form>
              <p>
              {
                this.state.message==='' ? '' : this.state.message
              }
              </p>
		</article>);
	}
}

export default Login;

