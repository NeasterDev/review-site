import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { addUser } from '../server/schemas/typeDefs.js';
import './style.css';

export default function Signup() {
  return (
    <div class="signup mt-6 ml-5">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>
          
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" />
            </div>
          </div>
    </div>
  );
}