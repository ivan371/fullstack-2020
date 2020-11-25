import React from 'react'
import {useDispatch} from 'react-redux'
import {signUp} from '../actions/auth'

interface IRegisterFormProps {
  onSuccess: () => void
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ onSuccess }) => {
  const dispatch = useDispatch()
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isError, setIsError] = React.useState(false)

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    await dispatch(signUp(login, email, password, () => setIsError(true), onSuccess))
  }

  return  (
    <form>
    <h3>Регистрация</h3>
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
          <p>E-mail</p>
        </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
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
      Зарегистрироваться
    </button>
    {isError && <div>Произошла ошибка при регистрации!!</div>}
  </form>)
}

export default RegisterForm
