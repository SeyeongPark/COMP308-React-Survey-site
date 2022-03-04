import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addSurvey = data => api.post(`/survey`, data)
export const getAllSurveys = () => api.get(`/surveys`)
export const updateSurveyById = (id, data) => api.put(`/survey/${id}`, data)
export const deleteSurveyById = id => api.delete(`/survey/${id}`)
export const getSurveyById = id => api.get(`/survey/${id}`)

const apis = {
    addSurvey,
    getAllSurveys,
    updateSurveyById,
    deleteSurveyById,
    getSurveyById,
}

export default apis
