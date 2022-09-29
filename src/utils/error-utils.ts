import {setErrorAC, SetErrorType, setStatusAC, SetStatusType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";


export const handleServerNetworkError = (dispatch: ErrorUtilsDispatchType, error: { message: string }) => {
    dispatch(setErrorAC(error.message))
    dispatch(setStatusAC('failed'))
}


export const handleServerAppError= <T>(dispatch:ErrorUtilsDispatchType, data: ResponseType<T>) => {
    if (data.messages) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('some error'))
    }
    dispatch(setStatusAC('failed'))
}

type ErrorUtilsDispatchType = Dispatch<SetStatusType | SetErrorType>