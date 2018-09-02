// Default imports
import React from 'react'

// Custom imports
import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/side-bar'
import Footer from '../common/template/footer'
import Routes from './routes'

// Componente funcional (baseado em uma função)
export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)