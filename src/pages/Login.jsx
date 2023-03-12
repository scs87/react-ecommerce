import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext, useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);
  const [formEmail, setFormEmail] = useState('');
  const [formPass, setFormPass] = useState('');
  const [error, setError] = useState({
    message: '',
    ok: false,
  });

  

  const handleLogin = (e) => {
    e.preventDefault();

    if (formEmail === 'assembler@gmail.com' && formPass === '123') {
      updateUserData({
        email: formEmail,
      });
      navigate('/products');
    } else {
      setError({
        message: 'Error',
        ok: true,
      });
    }
  };

  const handleEmailForm = (e) => {
    const value = e.target.value;

    setFormEmail(value);
  };
  const handlePassForm = (e) => {
    const value = e.target.value;
    setFormPass(value);
  };

  return (
    <div>
      <h1>Welcome</h1>

      <form
        onSubmit={(e) => handleLogin(e)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formEmail}
          onChange={(e) => handleEmailForm(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formPass}
          onChange={(e) => handlePassForm(e)}
        />
        <button type="submit">Login Button</button>
      </form>
      {error.ok && <p>ERROR!!!</p>}
    </div>
  );
}

export default Login;