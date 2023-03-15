import { createContext, useContext } from 'react'

export const FontContext = createContext({
    default: '',
    highlight: '',
})

export function useFonts() {
    return useContext(FontContext)
}
