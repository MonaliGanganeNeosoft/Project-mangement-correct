import axios from "axios";
import {
    ALL_PROJECTALL_FAIL,
    ALL_PROJECTALL_REQUEST,
    ALL_PROJECTALL_SUCCESS,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_FAIL,
    PROJECT_DETAILS_SUCCESS,
    CLEAR_ERRORS,
}from '../constants/projectAllConstants';

export const getAllProject = () =>async (dispatch)=>{
    try{
        dispatch({type:ALL_PROJECTALL_REQUEST});
        const {data} = await axios.get("/api/v1/projectDetails");
        dispatch({
            type:ALL_PROJECTALL_SUCCESS,
            payload:data,
        })
    }catch(error){
        dispatch({
            type:ALL_PROJECTALL_FAIL,
            payload:error.response.data.message,
        })
    }
}

export const getAllProjectDetails = (id) =>async (dispatch)=>{
    try{
        dispatch({type:PROJECT_DETAILS_REQUEST});
        const {data} = await axios.get(`/api/v1/projectDetail/${id}`);
        dispatch({
            type:PROJECT_DETAILS_SUCCESS,
            payload:data,
        });
    }catch(error){
        dispatch({
            type:PROJECT_DETAILS_FAIL,
            payload:error.response.data.message,
        });
    }
}
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };

