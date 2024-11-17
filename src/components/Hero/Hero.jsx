import React, { useEffect, useState } from 'react'
import './Hero.scss'

const Hero = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="wrapper">

                        {data.map(post => (
                            <div key={post.id} className="card">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        ))}


                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero
