import {useState} from 'react'
const Authenticate = () => {
    const [inputs, setInputs] = useState({})
    
    const handleInputChange = e => {
        e.preventDefault()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e, route) => {
        e.preventDefault()
        console.log(inputs)

    }

    return {handleInputChange, handleSubmit}
}

export default Authenticate