// Default imports
import React from 'react'

// Custom imports
import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/side-bar'

// Componente funcional (baseado em uma função)
export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
    </div>
)