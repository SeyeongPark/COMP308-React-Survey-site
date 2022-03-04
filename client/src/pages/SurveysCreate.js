import React, { useState } from 'react'
import api from '../api'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``


const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: auto;
    width: 1000px;
    padding: 100px;
    background: #ECECEC;
`

const Label = styled.label`
    margin: 5px;
    font-size: 20px;
    `

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const AddButton = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
    margin: auto;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
    `

    function SurveysCreate(props) {
        const [surveyId, setSurveyId] = useState('');
        const [gameGenre, setGameGenre ] = useState('');
        const [daysPerYear, setDaysPerYear] = useState('');
        const [age, setAge] = useState('');
    
        const handleValidateInputDaysPerYear = (event) => {
            const value = event.target.validity.valid
                ? event.target.value
                : daysPerYear
            setDaysPerYear(value);
        }

        const handleAddSurvey = async (event) =>{
            const data = {surveyId, gameGenre, daysPerYear, age}
            await api.addSurvey(data).then(res => {
                window.alert(`Survey added successfully!`)
                setSurveyId('');
                setGameGenre('');
                setDaysPerYear('');
                setAge('');
                window.location.href = '/surveys/list'
            }).catch((error) => {
                window.alert(`Please check \n - Entered Survey ID is already exist \n - Entered Game Genre is 'Action', 'Adventure', 'Strategy', or 'Sports'`)
              });  
        }
            
        return (
            <Wrapper>
                <Title>Create Survey</Title>
                <Label>Survey ID</Label>
                <InputText
                    type = 'text'
                    value = {surveyId}
                    required = {true}
                    onChange = {e => setSurveyId(e.target.value)} 
                    />
                <Label>Game Genre</Label>
                <InputText
                    type = 'text'
                    value = {gameGenre}
                    placeholder = "Please enter 'Action', 'Adventure', 'Strategy', or 'Sports'"
                    required = {true}
                    onChange = {e => setGameGenre(e.target.value)}  
                />
                <Label>Days Per Year</Label>
                <InputText
                    type = 'number'
                    step = '1.0'
                    min = '0'
                    max = '365'
                    placeholder=' 0 - 365'
                    value = {daysPerYear}
                    required = {true}
                    onChange = {handleValidateInputDaysPerYear} 
                />
                <Label>Age</Label>
                <InputText
                    type = 'number'
                    value = {age}
                    required = {true}
                    onChange = {e => setAge(e.target.value)} 
                />
    
            <AddButton onClick = {handleAddSurvey}>Add to Survey</AddButton>
            <CancelButton href = {'/surveys/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
    

export default SurveysCreate
