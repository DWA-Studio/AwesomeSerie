import { POP, PUSH } from '../constants/ActionTypes'

export function push (route) {
  return {
    type: PUSH,
    route
  }
}

export function pop () {
  return {
    type: POP
  }
}
