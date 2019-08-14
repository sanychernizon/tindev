import React, { useState } from 'react';
import './Login.css';

export default function Login() {

  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username)
  }

  return (
    <div className="login-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="logo">Tindev</h1>
        <input
          placeholder="Digite seu usuário Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
