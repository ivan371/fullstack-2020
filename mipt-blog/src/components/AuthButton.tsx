import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ModalNames } from '../constants/modalNames'
import { openModal, closeModal } from '../actions/modal'
import {signOut} from '../actions/auth'
import Modal from './Modal'
import AuthForm from './AuthForm'
import RegisterForm from './RegisterForm'

const AuthButton: React.FunctionComponent = () => {
  const modalName = useSelector((state: State) => state.modal.modalName)
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(Boolean(window.localStorage.getItem('auth')))
  const [isAuthForm, setIsAuthForm] = useState(true)

  const handleSignOut = () => {
    setIsLogin(false)
    signOut()
  }

  const handeSignIn = () => {
    setIsLogin(true)
    dispatch(closeModal())
  }
  
  return (
    <>
    {!isLogin ? 
      <button form-button onClick={() => dispatch(openModal(ModalNames.AUTH))}>Войти</button> : 
      <button onClick={handleSignOut}>Выйти</button>
    }  
      <Modal isModalOpen={modalName === ModalNames.AUTH}>
        {isAuthForm ? 
          <AuthForm onSuccess={handeSignIn} onRegisterButtonClick={() => setIsAuthForm(false)}/> 
          : <RegisterForm onSuccess={handeSignIn} />
        }
      </Modal>
    </>
  )
}

export default AuthButton