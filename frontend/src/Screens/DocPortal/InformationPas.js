import React from 'react'
import { Getuserdetails } from '../../Redux/Actions/userActions'
const InformationPas = ({match}) => {
    const dos = Getuserdetails.find(p => p._id === match.params.id)
    return (
        <>
            
        </>
    )
}

export default InformationPas
