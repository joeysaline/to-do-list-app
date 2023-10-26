export const INITIAL_STATE = {
  editor: {
    id: "",
    isEditing: false,
  },
  tasks: [],
  user: "",
  folder: "",
};

export const ACTIONS = {
  SET: "SET_TASKS",
  ADD: "ADD_TASK",
  DELETE: "DELETE_TASK",
  EDIT: "EDIT_TASK",
  COMPLETE: "TOGGLE_COMPLETE",
  SET_EDITOR: "SET_EDITOR",
  RESET_EDITOR: "RESET_EDITOR",
  SET_USER: "SET_USER",
};

const taskReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET:
      console.log(ACTIONS.SET, payload);
      return {
        ...state,
        tasks: payload,
      };
    case ACTIONS.ADD:
      console.log(ACTIONS.ADD, payload);
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    case ACTIONS.DELETE:
      console.log(ACTIONS.DELETE, payload);
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };
    case ACTIONS.EDIT:
      console.log(ACTIONS.EDIT, payload);
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) task.description = payload.description;
          return task;
        }),
      };
    case ACTIONS.COMPLETE:
      console.log(ACTIONS.COMPLETE, payload);
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) task.complete = payload.complete;
          return task;
        }),
      };
    case ACTIONS.SET_EDITOR:
      console.log(ACTIONS.SET_EDITOR, payload);
      return {
        ...state,
        editor: {
          id: payload.id,
          isEditing: payload.isEditing,
        },
      };
    case ACTIONS.RESET_EDITOR:
      console.log(ACTIONS.RESET_EDITOR, payload);
      return {
        ...state,
        editor: {
          id: "",
          isEditing: false,
        },
      };
    case ACTIONS.SET_USER:
      console.log(ACTIONS.SET_USER, payload);
      return {
        ...state,
        user: payload,
      };
    default:
      throw new Error(`No action defined for type ${type}.`);
  }
};

export default taskReducer;
