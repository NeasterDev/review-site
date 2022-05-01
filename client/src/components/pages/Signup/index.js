import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {ADD_USER} from '../../../utils/mutations';
import './style.css';
import Auth from '../../../utils/auth';

export default function Signup() {
  
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }

      // submit form
      const handleFormSubmit = async (event) => {
        event.preventDefault();
  
        try {
          const { data } = await addUser({
            variables: { ...formState }
          });
  
          Auth.login(data.addUser.token);
        }
        catch (error) {
          console.error(error);
        }
      }

  return (
    <div className='write-position is-hidden mobile-p sign-up-container signup-bg'>
      <h1 className="title">Signup</h1>
      <form className="signup" onSubmit={handleFormSubmit}>
        <div className="">
            <label className="label"></label>
            <div className="mb-1">
              <input 
                className="input" 
                type="username"
                name="username"
                id="username" 
                placeholder="Username"
                value={formState.username}
                onChange={handleChange} />
            </div>
          </div>
          
          <div className="field">
            <label className="label"></label>
            <div className="mb-1">
              <input 
                className="input" 
                type="email"
                name="email"
                id="email" 
                placeholder="Email"
                value={formState.email}
                onChange={handleChange} /> 
            </div>
          </div>

          <div className="field">
            <label className="label"></label>
            <div className="mb-1">
              <input 
                className="input" 
                type="password" 
                name="password"
                id="password" 
                placeholder="********"
                value={formState.password}
                onChange={handleChange} />
            </div>
          </div>
          <button class="button is-success has-text-black" type="submit">Signup!</button>
      </form>
      {error && <div>Signup failed</div>}
    </div>
  );
}