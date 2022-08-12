import { Component, useState } from 'react'
import { signUp } from '../../utilities/users-service'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
      this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
      })
    }

    handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        const formData = {...this.state}
        delete formData.error
        delete formData.confirm
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch(err) {
        console.log(err)
        this.setState({error: 'Sign Up Failed - Try Again'})
      }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="signup-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <br />
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <br />
                <br />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <br />
                <br />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <br />
                <br />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <br />
                <br />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
    }
      
}
