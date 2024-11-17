import React, { useEffect, useState } from 'react'
import './Users.scss'

const Users = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => {
                setData(data.users)
            })
    }, [])

    return (
        <>
            <section className="users">
                <div className="container">
                    <div className="users__wrapper">

                        {data.map(user => (

                                  <div key={user.id} className="users__card">
                                  <img src={user.image} alt="" />
                                  <h3>{user.firstName}</h3>
                                  <h4>{user.lastName}</h4>
                                  <p>{user.phone}</p>
                                  <p>{user.address.city}</p>
                                  <b>{user.address.country}</b>
                              </div>
                        ))}

                  
                    </div>
                </div>
            </section>
        </>
    )
}

export default Users
