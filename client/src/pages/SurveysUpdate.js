import React, { useState, useEffect } from 'react'
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

const UpdateButton = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
function SurveysUpdate(props) {
    const [id, setId] = useState(props.match.params.id);
    const [surveyId, setSurveyId] = useState('');
    const [gameGenre, setGameGenre] = useState('');
    const [daysPerYear, setDaysPerYear] = useState('');
    const [age, setAge] = useState('');
    useEffect(()=>{
        const fetchData = async () => {
        const survey = await api.getSurveyById(id)
        setSurveyId(survey.data.data.surveyId);
        setGameGenre(survey.data.data.gameGenre);
        setDaysPerYear(survey.data.data.daysPerYear);
        setAge(survey.data.data.age);
        };
       fetchData(); 
    },[id]);
    const handleValidateInputDaysPerYear = (event )=> {
        const value = event.target.validity.valid
            ? event.target.value
            : daysPerYear

        setDaysPerYear(value);
    }
    const handleUpdateSurvey = async (event) =>{
        const payload = { surveyId, gameGenre, daysPerYear, age }
        await api.updateSurveyById(id, payload).then(res => {
            // window.alert(`Survey updated successfully`)
            setSurveyId('');
            setGameGenre('');
            setDaysPerYear('');
            setAge('');
            window.location.href = `/surveys/list`;
        })
    };

    return (
        <Wrapper>
            <Title>Update Survey</Title>

            <Label>Survey ID</Label>
                <InputText
                    type = 'text'
                    value = {surveyId}
                    required = {true}
                    onChange = {e => setSurveyId(e.target.value)} 
                    disabled/>
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

            <UpdateButton onClick={handleUpdateSurvey}>Update Survey</UpdateButton>
            <CancelButton href={'/surveys/list'}>Cancel</CancelButton>
        </Wrapper>
    );  
}


export default SurveysUpdate
