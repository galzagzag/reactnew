import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  function goToSignin() {
    navigate('/signin');
  }
  function goToSignup() {
    navigate('/signup');
  }

  return (
    <div>
      <button onClick={goToHome}> Home </button>
      <button onClick={goToSignin}> SignIn</button>
      <button onClick={goToSignup}> SignUp </button>
    </div>
  );
}
