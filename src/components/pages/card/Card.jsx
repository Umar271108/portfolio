import React from 'react'
import './Card.css'

const Card = ({
    img,
    type,
    website,
    href,
    reverse
}) => {
    return (
        <>
            <div className="card">
                <div className={`card-inner + ${reverse}`}>
                    <a href={href} className="img-link">
                        <img src={img} alt="" className="card-img" />
                    </a>

                    <div className="card-text">
                        <div className="card-type">{type}</div>
                        <div className="card-name">{website}</div>
                        <a href={href} className="preview">preview</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card