import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { addUser } from '../server/schemas/typeDefs.js';
import './style.css';

export default function Signup() {
  return (
    <div className="signup mt-6 ml-5">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" />
            </div>
          </div>
          <button class="button is-success has-text-black">Login!</button>
    </div>
  );
}