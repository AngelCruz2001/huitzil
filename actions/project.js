import { types } from "../types/types"

export const startChangeTitle = (title) => {
    return (dispatch ) => {
        dispatch(changeTitleProject(title))
    }
}

const addProject = (project) => ({
    type: types.addProject,
    payload: project
})

const deleteProject = (project) => ({
    type: types.deleteProject,
    payload: project
})


const changeTitleProject = (title) => ({
    type: types.changeTitleProject,
    payload: title
})

export const setActiveProject = (project) => ({
    type: types.activeProject,
    payload: project
})

