import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {
  state = {
    joke: [],
  };

  render() {
    return (
      <>
        <h2>List of Jokes</h2>
        <ul>
          {this.state.joke.map(u => (
            <li key={u.id}>{u.joke}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    axios
    .get("https://icanhazdadjoke.com/search")
    .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.error('USERS ERROR', error);
      });
    }
  }


export default requiresAuth(Jokes);