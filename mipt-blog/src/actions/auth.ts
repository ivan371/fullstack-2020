import { Dispatch } from 'redux'
import { ApiClient } from '../services'

export function signIn(username: string, password: string): any {
  return async (dispatch: Dispatch) => {
    try {
      const response = await ApiClient("token/", {
        method: 'POST',
        headers: {
          "Content-Type": "Application/json",
        }, body: JSON.stringify({ username, password })
      });

      const { access, refresh } = await response.json()

      window.localStorage.setItem('auth', access)
      window.localStorage.setItem('refresh', refresh)
    } catch(err) {
      console.log(err)
    }
  }
}

export function signOut() {
  window.localStorage.clear()
}

export function signUp(username: string, email: string, password: string, onError: () => void, onSuccess: () => void) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await ApiClient("users/", {
        method: 'POST',
        headers: {
          "Content-Type": "Application/json",
        }, body: JSON.stringify({ username, password, email })
      });
      if (response.status !== 201) {
        throw new Error('Ошибка при регистрации')
      }
      dispatch(signIn(username, password))
      onSuccess()
      
    } catch(err) {
      onError()
    }
  }
}
