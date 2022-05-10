import { createAction, createReducer, on } from "@ngrx/store";


export const employeeReducer = createReducer(
    //initialState
    {
        name: 'generico',
        empresa: 'generico',
        logado: false
    },
    //Criação da Action
    on(createAction('[Employee] Set Logged in or out'), (state) => {
        console.log('estado original - mudou no reducer' + JSON.stringify(state))
        return {
            ...state,
            logado: !state.logado
        };
    })
);