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
  }

  return (
    <div>
      <form className="signup mt-6 ml-5" /*onSubmit={handleFormSubmit}*/>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input 
                className="input" 
                type="text" 
                placeholder="e.g Alex Smith"
                value={formState.username}
                onChange={handleChange} />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
                className="input" 
                type="email" 
                placeholder="e.g. alexsmith@gmail.com"
                value={formState.email}
                onChange={handleChange} /> 
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input 
              className="input" 
              type="password" 
              placeholder="********"
              value={formState.password}
              onChange={handleChange} />
            </div>
          </div>
          <button class="button is-success has-text-black">Signup!</button>
      </form>
      {error && <div>Signup failed</div>}
    </div>
  );
}