import React from 'react'
import { useState } from 'react'
import {nanoid} from 'nanoid'

const Form = ({list, setList}) => {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const newUser = {
            id:nanoid(),
            name,
            city
        }
        setName('')
        setCity('')
        setList([...list,newUser])
    }

  return (
    <div>
        <form className="form col-3 mx-auto m-2 p-3" onSubmit={submitHandler}>
            <label className="form-lable">Name:</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>
            <label className="form-lable">City:</label>
            <input type="text" className="form-control" onChange={(e) => setCity(e.target.value)}/>
            <button className="btn btn-primary mt-3">Add User</button>
        </form>
    </div>
  )
}

export default Form