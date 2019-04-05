import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {
  state = {
    jokes: [],
  };

  render() {
    return (
      <>
        <h2>List of Jokes</h2>
        <ul>
          {this.state.jokes.map(u => (
            <li key={u.id}>{u.joke}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = `/jokes`;
    axios
      .get(endpoint)
    .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.error('USERS ERROR', error);
      });
    }
  }


export default requiresAuth(Jokes);