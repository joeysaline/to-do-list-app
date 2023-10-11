export const INITIAL_STATE = {
  task: {
    id: "",
    description: "",
    complete: false,
  },
  editor: {
    id: "",
    description: "",
    complete: false,
    isEditing: false,
  },
  tasks: [],
};

export const ACTIONS = {
  SET: "SET_TASKS",
  ADD: "ADD_TASK",
  DELETE: "DELETE_TASK",
  EDIT: "EDIT_TASK",
  COMPLETE: "TOGGLE_COMPLETE",
  SET_EDITOR: "SET_EDITOR",
  RESET_EDITOR: "RESET_EDITOR",
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
        editor: payload,
      };
    case ACTIONS.RESET_EDITOR:
      console.log(ACTIONS.RESET_EDITOR, payload);
      return {
        ...state,
        editor: {
          id: "",
          description: "",
          complete: false,
          isEditing: false,
        },
      };
    default:
      throw new Error(`No action defined for type ${type}.`);
  }
};

export default taskReducer;
