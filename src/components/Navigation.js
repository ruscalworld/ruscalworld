import { createContext, useContext, useState } from 'react'

export const NavigationContext = createContext({
    setElementState(element, value) {},
    getElementState(element) {}
})

export function useNavigationContext() {
    return useContext(NavigationContext)
}

export function useElementState(element) {
    const { getElementState, setElementState } = useNavigationContext()
    return { currentState: getElementState(element), setState: (state) => setElementState(element, state) }
}

export function Navigation({ children }) {
    const [ states, setStates ] = useState({})

    function getElementState(element) {
        return states[element] ?? false
    }

    function setElementState(element, state) {
        const newStates = Object.create(states)
        newStates[element] = state
        setStates(newStates)
    }

    return (
        <NavigationContext.Provider value={{ getElementState, setElementState }}>
            { children }
        </NavigationContext.Provider>
    )
}
