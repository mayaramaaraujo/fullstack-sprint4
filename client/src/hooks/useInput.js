import {useState} from 'react'

const useInput = () => {
    const [data, setData] = useState("")

    const handleInput = (e) => {
        setData(e.target.value)
    }

    return [data, handleInput]
}

export default useInput;