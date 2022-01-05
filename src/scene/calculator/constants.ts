export const enum OPERATIONS {
    MULT = 'MULT',
    DIV = 'DIV',
    SUM = 'SUM',
    SUBT = 'SUBT',
    RES = 'RES',
    RESET = 'RESET',
    TYPE = 'TYPE',
};
export const keyboardKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '/', '*', '-', 'Enter'];
export const keyboardNumbers: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
export const operations: OPERATIONS[] = [OPERATIONS.DIV, OPERATIONS.MULT, OPERATIONS.SUBT, OPERATIONS.SUM];

interface CalculatorReducerResAction {
    type: OPERATIONS;
}
interface CalculatorReducerOpAction {
    type: OPERATIONS;
    num: number;
}
type CalculatorReducerActions =  CalculatorReducerResAction | CalculatorReducerOpAction;

interface CalculatorReducerState {
    result: number;
    values: Array<number | string>;
    num: number
}

export const switchCharacter = (character: string) => {
    switch (character) {
        case '/':
            return OPERATIONS.DIV;
        case '*':
            return OPERATIONS.MULT;
        case '-':
            return OPERATIONS.SUBT;
        case '+':
            return OPERATIONS.SUM;
        case 'Enter':
            return OPERATIONS.RES;
        default:
            return character;
    }
}

export const switchCharacterKey = (key: string | number) => {
    switch (key) {
        case OPERATIONS.DIV:
            return '/';
        case OPERATIONS.MULT:
            return '*';
        case OPERATIONS.SUBT:
            return '-';
        case OPERATIONS.SUM:
            return '+';
        case OPERATIONS.RES:
            return 'Enter';
        default:
            return key;
    }
}

const toOperate = (operation: string, reduceValue: number, postValue: number): number => {
    switch(operation) {
        case OPERATIONS.DIV:
            return reduceValue / postValue;
        case OPERATIONS.MULT:
            return reduceValue * postValue;
        case OPERATIONS.SUBT:
            return reduceValue - postValue;
        case OPERATIONS.SUM:
            return reduceValue + postValue;
        default:
            throw new Error('No operation');
    }
}

export const addOperation = (pipeline: Array<number | string>, operation: OPERATIONS) => {
    const lastElement = pipeline[pipeline.length - 1];
    if (typeof lastElement !== 'string') {
        return [...pipeline, operation]
    }
    if (lastElement !== operation) {
        pipeline.pop();
        return [...pipeline, operation]
    }
    return pipeline;
}

export const initialState: CalculatorReducerState = {result: 0, values: [], num: 0};


export const calculatorReducer = (state: CalculatorReducerState, action: any): CalculatorReducerState => {
    switch (action.type) {
        case OPERATIONS.TYPE:
            const mergedNumber = parseInt(`${state.num}${action.num}`, 10);
            if (state.result > 0) {
                return {...state, num: 0, result: 0, values: [action.num]};
            }
            if (typeof state.values[state.values.length - 1] === 'string') {
                return {...state, num: mergedNumber, values: [...state.values, mergedNumber]};
            } else {
                state.values.pop();
                return {...state, num: mergedNumber, values: [...state.values, mergedNumber]};
            }
        case OPERATIONS.DIV:
            return {...state, num: 0, values: addOperation(state.values, OPERATIONS.DIV)};
        case OPERATIONS.MULT:
            return {...state, num: 0, values: addOperation(state.values, OPERATIONS.MULT)};
        case OPERATIONS.SUBT:
            return {...state, num: 0, values: addOperation(state.values, OPERATIONS.SUBT)};
        case OPERATIONS.SUM:
            return {...state, num: 0, values: addOperation(state.values, OPERATIONS.SUM)};
        case OPERATIONS.RES:
            const result: string | number = state.values.reduce((prev, current, i: number) => {
                if (typeof current === 'string') {
                    return toOperate(current, prev as number, state.values[i + 1] as number)
                }
                if (typeof state.values[i - 1] === 'string') {
                    return prev;
                }
                return current as number;
            }, 0);
            return { ...state, values: [], num: 0, result: result as number };
        case OPERATIONS.RESET:
            return {...state, result: state.result - 1};
        default:
            throw new Error('No action type');
    }
}