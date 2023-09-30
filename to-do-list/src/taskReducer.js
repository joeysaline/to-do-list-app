export const initialState = {
    task: {
        id: "",
        description: ""
    },
    tasks: []
}

export const ACTIONS = {
    ADD: "ADD_TASK",
    DELETE: "DELETE_TASK",
    EDIT: "EDIT_TASK",
}

const taskReducer = (state, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case ACTIONS.ADD:
            console.log(ACTIONS.ADD, payload);
            return {
                ...state,
                tasks: payload.task
            }
        case ACTIONS.DELETE:
            console.log(ACTIONS.DELETE, payload);
            return {
                ...state,
                tasks: payload.tasks
            }
        default:
            throw new Error(`No action defined for type ${type}.`);
    }
}

export default taskReducer;