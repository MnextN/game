import { INIT_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from '../actionTypes/studentsAT'

export const addStudentAC = (payload) => {
  return {
    type: ADD_STUDENT,
    payload
  }
}