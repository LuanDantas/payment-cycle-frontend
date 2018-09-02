// Default imports
import React from 'react'

// Componente funcional
export default props => (
    <li>
        <a href={ props.path }>
            <i className={ `fa fa-${ props.icon }` }></i> { props.label }
        </a>
    </li>
)
