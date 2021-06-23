import React from 'react'
import Contenu from '../../Components/LandingPage/Contenu'
import Articles from '../../Components/LandingPage/Articles'
import Static from '../../Components/LandingPage/Static'
import Banner from '../../Components/LandingPage/Banner'

const AccueilScreen = () => {
    return (
        <>
            <Banner />
            <Contenu />
            <section className="articles text-center">
            <Articles />
            </section>
            <section className="static text-center">
            <Static />
            </section>
        </>
    )
}

export default AccueilScreen
