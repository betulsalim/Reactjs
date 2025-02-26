# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# App & Login Components

The `App` component is the main component of the application that renders the `Login` component along with a heading.

## Usage

The `App` component is typically the root component of your React application. It imports and uses the `Login` component.

```jsx
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div>
      <h1>COMPONENTS</h1>
      Betül
      <Login />
    </div>
  );
}

export default App;

Component Structure
The App component consists of the following elements:

A heading (<h1>) with the text "COMPONENTS".
A text node with the name "Betül".
The Login component.
Example
Here is an example of how the App component is rendered:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

<hr />

# Login Component

The `Login` component is a simple React component that provides a login form with fields for a username and password.

## Usage

To use the `Login` component, import it into your React application and include it in your JSX.

```jsx
import Login from './Login';

function App() {
  return (
    <div>
      <h1>My Application</h1>
      <Login />
    </div>
  );
}

export default App;

Component Structure
The Login component consists of the following elements:

A heading (<h2>) with the text "LOGIN".
A text input field for the username with a label "Kullanıcı Adınız".
A text input field for the password with a label "Şifreniz".
A button with the text "Giriş Yap".
Example
Here is an example of how the Login component is rendered:
import React from 'react';

export const users = [
  {
    username: "betül",
    password: "123"
  },
  {
    username: "burak",
    password: "456"
  }
];

function Login() {
  return (
    <>
      <div>
        <h2>LOGIN</h2>
        <div>
          <p>Kullanıcı Adınız: </p>
          <input type="text" />
        </div>
        <div>
          <p>Şifreniz </p>
          <input type="text" />
        </div>
        <br /><br />
        <button>Giriş Yap</button>
      </div>
    </>
  );
}

export default Login;

Props
The Login component does not accept any props.

License
This project is licensed under the MIT License.


Save this content in a file named `README.md` in the same directory as `Login.jsx`.
Save this content in a file named `README.md` in the same directory as `Login.jsx`.
