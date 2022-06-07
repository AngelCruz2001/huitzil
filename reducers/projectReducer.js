import { types } from "../types/types";

const initialState = {
    projects: [
        {
            id: '1',
            title: 'Titulo del proyecto 1',
            description: ''
        },

    ],
    activeProject: {
        id: '1',
        title: 'Titulo del proyecto 1',
        description: ''
    }


}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.changeTitleProject:
            return {
                ...state,
                projects: state.projects.map(project => project.id === state.activeProject.id ? { ...project, title: action.payload } : project)
            }
        case types.changeDescriptionProject:
            return {
                ...state,
                projects: state.projects.map(project => project.id === action.payload.id
                    ?
                    { ...project, description: action.payload.description }
                    : project)
            }
        case types.addProject:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case types.deleteProject:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload)
            }
        case types.activeProject:
            return {
                ...state,
                activeProject: action.payload
            }

        default:
            return state;
    }
}