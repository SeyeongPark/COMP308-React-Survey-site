import React, { useState, useEffect } from 'react';
import ReactTable from "react-table-6";  
import api from '../api'

import styled from 'styled-components'

import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Refresh = styled.div`
    color: blue;
    cursor: pointer;
    padding: 0 10px 10px 10px;
    float: right;
    `

function UpdateSurvey(props) {
   const updateSurvey = (event) => {
        event.preventDefault()
      
        window.location.href = `/surveys/update/${props.id}`
    }
    return (<Update onClick={updateSurvey}>Update</Update>);
}

function RefreshList(props) {
    const refreshList = (event) => {
         window.location.href = `/surveys/list`
     }
     return (<Refresh onClick={refreshList}>Refresh</Refresh>);
 }

function SurveysList(props){
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        await api.getAllSurveys().then(result => {
            setSurveys(result.data.data);
        }).catch((error) => {
            console.log('error in fetchData:', error)
          });
        };  
        fetchData();
    },[]);

    const columns = [
        {
            Header: 'Survey ID',
            accessor: 'surveyId',
            filterable: true,
        },
        {
            Header: 'Game Genre',
            accessor: 'gameGenre',
            filterable: true,
        },
        {
            Header: 'Days Per Year',
            accessor: 'daysPerYear',
            filterable: true,
        },
        {
            Header: 'Age',
            accessor: 'age',
            filterable: true,
        }, 
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <UpdateSurvey id={props.original._id} />
                    </span>
                )
            },
        },
    ]

    let showTable = true

    return (
        <Wrapper>
        <h1> All Surveys</h1>
        {showTable && (
            <ReactTable
            data={surveys}
            columns={columns}
            defaultPageSize={5}
            showPageSizeOptions={true}
            />
            )}
            <RefreshList/>
            COMP308 - Midterm Test - Seyeong Park (301088175)
    </Wrapper>
    )
}


export default SurveysList
