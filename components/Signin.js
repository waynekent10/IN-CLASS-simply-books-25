import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to look at these books!!!</p>
      <Button type="button" size="lg" className="btn btn-warning" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
