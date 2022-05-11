import React, { useState } from 'react'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'
import s from "./home.module.scss"
import { SpinnerCircular } from 'spinners-react';

export default function Home() {
    const [user, setUser] = useState([])
    const [status, setStatus] = useState(false)

    const getUser = async (id) => {
        const res = await fetch(`https://reqres.in/api/users?page=${id}`)
        const obj = await res.json()
        setUser(obj.data)
    }
    const showData = (id,time) => {
        getUser(id)
        setStatus(true)
        setTimeout(() => {
            setStatus(false)
        }, time)
    }

    return (
        <div className={s.container}>
            <Navbar handler={() => showData(1,2000)} />
            {
                status &&
                <div className={s.spinner}>
                    <SpinnerCircular className={s.spin} сolor="white" enabled={status} size="10%" />
                    <p>Loading...</p>
                </div>
            }
            {
                !status &&
                <div className={s.grid}>
                    {
                        user?.map((val, idx) =>
                            <Card key={idx} avatar={val.avatar} name={val.first_name + " " + val.last_name} email={val.email} />
                        )
                    }
                </div>
            }
           {!status && <>
                {
                    user.length > 0 ?
                        <div className={s.pagination}>
                            <button onClick={() => showData(1,500)}>Prev User's List</button>
                            <button onClick={() => showData(2,500)}>Next User's List</button>
                        </div>
                        :
                        <span >No data Available! Please click on Get User Button for User's List.</span>
                }
            </>}
        </div>
    )
}
