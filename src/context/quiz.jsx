import { createContext, useReducer } from "react";
//useReducer gerencia estados mais complexos e também fazer alterçãoes com base no projeto
import questions from '../data/questions';
const STAGES = ['Start', 'Playing', 'End']
//Cria o objeto initialState e cria propriedades que referem ao jogo
const initialState = {
    gameStage: STAGES[0],//estagio inicial do jogo
    questions,//perguntas do jogo
    currentQuestion: 0,
}

const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case 'CHANGE_STATE':
    return {
        ...state,
        gameStage: STAGES[1],
    };
        default:
            return state;
    }
};
export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState)

    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>

}