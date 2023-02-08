import React from 'react'

const List = ({list, setList}) => {

    const deleteUser = (id) => {
        const remaingUsers = list.filter((user) => {
            return user.id !== id
        })
        setList(remaingUsers)
    }

  return (
    <div>
        <h1>List:</h1>
        {
            list.map((user) => (
                <div className="border border-dark col-3 mx-auto">
                    <h6>{user.id}</h6>
                    <h1>{user.name}</h1>
                    <h2>{user.city}</h2>
                    <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete user</button>
                </div>
            ))           
        }
    </div>
  )
}

export default List