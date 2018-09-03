// Default imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Custom imports
import { getSummary } from './dashboard-actions'
import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import ValueBox from '../common/widgets/value-box'
import Row from '../common/layout/row'

// Componente de classe
class Dashboard extends Component {

    // Função chamada sempre que o componente é renderizado
    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        // Extraindo as variáveis do estado via Redux, vindas do componente Dashboard
        const { credit, debit } = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${ credit }`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${ debit }`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${ credit - debit }`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

// Método para o estado do Redux
const mapStateToProps = state => ({ summary: state.dashboard.summary }) // Os campos são resgatados do estado do componente dashboard neste caso

// Ligando as Actions Creators ao componente
const mapDispatchToProps = dispatch => bindActionCreators( { getSummary }, dispatch )

// Export com Decorator
export default connect(mapStateToProps, mapDispatchToProps )(Dashboard)