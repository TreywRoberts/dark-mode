import useLocalStorage from './useLocalStorage'

const useDarkMode = (item) =>{
    const [darkValues, setDarkValues] = useLocalStorage('dark-mode', item)

    return [darkValues]
}

export default useDarkMode