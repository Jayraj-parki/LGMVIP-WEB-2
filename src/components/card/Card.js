import React from 'react'
import s from "./card.module.scss"
export default function Card({name, avatar,email}) {
    return (
        <div  className={s.card} >
            <div className={s.image}>
                <img src={avatar} alt="" />
            </div>
            <div className={s.data}>
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
        </div>
    )
}
