import React from 'react'

export const users = [
  {
    username: "betül",
    password: "123"
  },
  {
    username: "burak",
    password: "456"
  }
]

function Login() {
  //Fragement
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
  )
}

export default Login