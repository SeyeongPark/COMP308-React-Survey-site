import React from 'react'
import styled from 'styled-components'

import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 150px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light bg-light',
})`
    margin-bottom: 10 px;
`
function NavBar(props){
    return (
        <Container>
            <Nav>
                <Links />
            </Nav>
        </Container>
    );
}

export default NavBar
