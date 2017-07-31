/* import { createStore, combineReducers } from 'redux'

const manReducer = (state = { name: '', age: '', gender: 'male'}, action) => {

    return Object.assign({}, state, { name: 'Tuan'}) // Make a new copy and modify of state
}

const womenReducer = (state = { name: '', age: '', gender: 'female'}, action) => {

    return Object.assign({}, state, { name: 'Ngoc'}) // Make a new copy and modify of state
}

const reducers = combineReducers({
    man: manReducer,
    women: womenReducer
})

const store = createStore(reducers)

store.subscribe(() => {
    console.log('Stored changed', store.getState())
})

store.dispatch({ type: 'TEST', sayHello: 'Hello' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
store.dispatch({ type: 'TEST', sayYeah: 'Yeah' })
 */