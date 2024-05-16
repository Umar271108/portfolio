import React from 'react'
import './News.css'
import image from '../../../assets/bike.png'
import Card from '../card/Card'

const News = () => {
    return (
        <>
            <section className="projects">
                <div className="container">
                    <div className="projects-title">Projects</div>

                    <div className="projects-inner">
                        <Card img={image} type={'HTML CSS SLICK JS'} website={'Xiaomi Himo C26'}
                        href={'https://xiaomi-bike-c26.vercel.app/'}/>

                        <Card img={image} type={'HTML CSS SLICK JS'} website={'Xiaomi Himo C26'}
                        href={'https://xiaomi-bike-c26.vercel.app/'} reverse={'reverse'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News