import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``
function Links(props){
    return (
        <React.Fragment>
                <Link to="/surveys/list" className="navbar-brand">
                Game Survey 
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/surveys/list" className="nav-link">
                                List Surveys
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/surveys/create" className="nav-link">
                                Create Survey
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
    );
}


export default Links
