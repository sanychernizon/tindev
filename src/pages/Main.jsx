import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Main.css';

import api from '../services/api';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main(props) {

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: { user: props.location.state.detail }
      })
      setUsers(response.data)
    }
    loadUsers();
  }, [props.location.state.detail])

  return (
    <div className="main-container">
      <Link to="/">
        <h1 className="logo">Tindev</h1>
      </Link>
      <ul>
        {users.map((user) => {
          return (
          <li key={user._id}>
            <img src={user.avatar} alt={user.name} />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button">
                <img src={dislike} alt="Dislike"/>
              </button>
              <button type="button">
                <img src={like} alt="Like"/>
              </button>
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  );
}
