import React from 'react'
import {Route, Routes, Outlet} from 'react-router-dom'

const Layout = ({
    header
}) => {
    return (
        <>
            {header}
            <Outlet/>
        </>
    )
}

export default Layout