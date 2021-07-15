import { createStore } from 'redux'

import rootReducers from './modules/rootReducers'

export const store = createStore(rootReducers)
