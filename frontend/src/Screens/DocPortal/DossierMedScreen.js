import React from 'react'
import { Getuserdetails } from '../../Redux/Actions/userActions'
const DossierMedScreen = ({match}) => {
    const dos = Getuserdetails.find(p => p._id === match.params.id)
    console.log(dos)
    return (
        <>
            <h1>{Getuserdetails.lastName}</h1>
            
        </>
    )
}

export default DossierMedScreen
