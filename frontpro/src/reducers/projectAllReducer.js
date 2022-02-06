import {
    ALL_PROJECTALL_FAIL,
    ALL_PROJECTALL_REQUEST,
    ALL_PROJECTALL_SUCCESS,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_FAIL,
    PROJECT_DETAILS_SUCCESS,
    CLEAR_ERRORS
}from '../constants/projectAllConstants'
export const projectAllReducer=(state={projectDetails:[]},action)=>{
    switch (action.type){
        case ALL_PROJECTALL_REQUEST:
            return{
                loading:true,
                projectDetails:[],
            }
        case ALL_PROJECTALL_SUCCESS:
            return{
                loading:false,
                projectDetails:action.payload.projectDetails
            };
        case ALL_PROJECTALL_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null,
                };
        default:
            return state;
    }
};
export const projectAllDetailsReducer=(state={projectDetail:{}},action)=>{
    switch (action.type){
        case PROJECT_DETAILS_REQUEST:
            return{
                loading:true,
                ...state,
            }
        case PROJECT_DETAILS_SUCCESS:
            return{
                loading:false,
                projectDetail:action.payload.projectDetail
            };
        case PROJECT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null,
                };
        default:
            return state;
    }
};