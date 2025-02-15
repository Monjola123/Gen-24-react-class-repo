import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      email:"",
      gen:""
    }
  } 
  handleChange=(e)=>{
      e.preventDefault()
      this.setState({[e.target.name]:e.target.value})
      console.log(this.state);
    }

    handleSubmit=(e)=>{
      e.preventDefault()
      let details ={name:this.state.name,
        email:this.state.email, 
        gen:this.state.gen}
      this.props.newUser(details)
      this.setState({
				name: "",
				email: "",
				gen: "",
			});

    }

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Full Name</Form.Label>
					<Form.Control type="text" placeholder="Enter full name" value={this.state.name} onChange={this.handleChange} name="name"/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Gen</Form.Label>
					<Form.Control type="text" placeholder="Gen" value={this.state.gen} name="gen" onChange={this.handleChange} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default UserForm;
