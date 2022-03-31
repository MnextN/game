import { INIT_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '../actionTypes/studentsAT'
const initialState = { students: [] }

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_STUDENTS:
      return { ...state, students: action.payload }

    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.payload] }

    case DELETE_STUDENT:
      return { ...state, students: state.students.filter(el => el.id !== action.payload) }

    case UPDATE_STUDENT:
      return {
        ...state, students: state.students.map(el => {
          if (el.id === action.payload.id) {
            return { ...el, name: action.payload.name, phase: action.payload.phase }
          } else {
            return el
          }
        })
      }

    default:
      return state
  }
}