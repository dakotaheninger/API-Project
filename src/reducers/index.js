let defaultState = {
    allArticles: []
};


let mainReducer = (state = defaultState, action) =>{
    console.log(state.allArticles)
    if(action.type === "SET_DATA"){
        return {
            ...state,
            allArticles: action.items
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;