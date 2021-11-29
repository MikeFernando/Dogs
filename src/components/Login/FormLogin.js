import React from 'react';
import { Link } from 'react-router-dom';

import URL from '../../utils/url';

import { Button } from '../Forms/Button/Button';
import { Input } from '../Forms/Input/Input';

export const FormLogin = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmitForm(event) {
    event.preventDefault();

    fetch(`${URL}/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmitForm}>
        <Input
          name="username"
          label="Usuário"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </div>
  );
};
