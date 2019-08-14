import React, { useState } from 'react';
import './Login.css';
import api from '../services/api'

export default function Login(props) {

  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/devs', { username });
    const { _id } = response.data;
    props.history.push({
      pathname: '/main',
      state: { detail: _id }
    })
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
