import React from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../actions/auth'

interface IAuthFormProps {
  onSuccess: () => void
}

const AuthForm: React.FunctionComponent<IAuthFormProps> = ({onSuccess}) => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch()

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    await dispatch(signIn(login, password))
    onSuccess()
  }

  return  (
    <form>
    <h3>Авторизация</h3>
    <div className="form-wrapper">
      <div className="form-item">
        <label>
          <p>Логин</p>
        </label>
        <input
          type="text"
          name="login"
          value={login}
          onChange={(event) => {
            setLogin(event.target.value);
          }}
        ></input>
      </div>
      <div className="form-item">
        <label>
          <p>Пароль</p>
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
      </div>
    </div>
    <button type="submit" className="form-button" onClick={handleSubmit}>
      Войти
    </button>
  </form>)
}

export default AuthForm