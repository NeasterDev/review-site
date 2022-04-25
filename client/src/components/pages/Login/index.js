import React from 'react';
import './style.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Login() {
  return (
    <div className="login">
        <h1>Login</h1>
    </div>
  );
}

export default Login;