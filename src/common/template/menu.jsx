// Default imports
import React from 'react'

// Custom imports
import MenuItem from './menu-item'
import MenuTree from './menu-tree'

// Componente funcional
export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)