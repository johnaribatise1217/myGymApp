import { createContext, useReducer } from "react";

export const Login = createContext()

const LoginReducer = (state, action) => {
    switch(action.type) {
        case "ENTER FIRSTNAME" : 
            localStorage.setItem("firstname", action.payload)
            return {...state, firstname : action.payload }
        case "ENTER LASTNAME" :
            localStorage.setItem("lastname", action.payload);
            return {...state, lastname : action.payload} 
        case "ENTER EMAIL" : 
            localStorage.setItem("email", action.payload);
            return {...state, email : action.payload}
        case "SIGN OUT" : 
            localStorage.clear()
            return {
                firstname : "",
                lastname : "",
                email : ""
            }
        default :
            return state
    }
}

const ProvideLogin = ({children}) => {
    const storedFirstname = localStorage.getItem("firstname") || "";
    const storedLastname = localStorage.getItem("lastname") || "";
    const storedEmail = localStorage.getItem("email") || "";

    const loginDetails = {
        firstname : storedFirstname,
        lastname : storedLastname,
        email: storedEmail
    }

    const [state, dispatch] = useReducer(LoginReducer, loginDetails)

    return (
        <Login.Provider value={{state, dispatch}}>
            {children}
        </Login.Provider>
    )
}

export default ProvideLogin