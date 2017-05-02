import { PUSH, POP } from '../constants/ActionTypes'
import { NavigationExperimental } from 'react-native'
const { StateUtils: StateUtils} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
   key: 'home',
   title: 'Series'
  }]
}

function navigationState (state = initialState, action) {
  switch (action.type) {

    case PUSH:
      if (state.routes[state.index].key === (action.route && action.route.key)) return state
    return StateUtils.push(state, action.route)

    case POP:
      if (state.index === 0 || state.routes.length === 1) return state
      return StateUtils.pop(state)

   default:
     return state

  }
}

export default navigationState
