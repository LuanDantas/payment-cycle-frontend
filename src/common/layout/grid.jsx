// Default imports
import React, { Component } from 'react'

// Componente baseado em classe
export default class Grid extends Component {

    /*
     * Método que receberá uma string com um conjusto de números separados por espaço
     * e ele irá transformar esses números nas classes css do bootstrap.
    */
    toCssClasses( numbers ) {
        const cols = numbers ? numbers.split( ' ' ) : []
        let classes = ''

        if ( cols[0] ) {
            classes += `col-xs-${ cols[0] }`
        }

        if ( cols[1] ) {
            classes += ` col-sm-${ cols[1] }`
        }

        if ( cols[2] ) {
            classes += ` col-md-${ cols[2] }`
        }

        if ( cols[3] ) {
            classes += ` col-lg-${ cols[3] }`
        }

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses( this.props.cols || 12 )

        return (
            <div className={ gridClasses }>
                { this.props.children }
            </div>
        )
    }
}