const initialState = {
    count: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT":
            return{
                ...state, // sao chép tất cả các state (ví dụ  {count: 0})
                count: state.count + 1
            }
        case "DECREMENT":
            return{
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export default CounterReducer
