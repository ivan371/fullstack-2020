import { Dispatch } from 'redux'
import { ApiClient } from '../services'

export function signIn(username: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await ApiClient("token/", {
        method: 'POST',
        headers: {
          "Content-Type": "Application/json",
        }, body: JSON.stringify({ username, password })
      });

      const { access } = await response.json()

      window.localStorage.setItem('auth', access)
    } catch(err) {
      console.log(err)
    }
  }
}

export function signOut() {
  window.localStorage.clear()
}