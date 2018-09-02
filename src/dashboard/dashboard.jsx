// Default imports
import React, { Component } from 'react'

// Custom imports
import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'

// Componente de classe
class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard