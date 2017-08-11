let defaultState = {
    allArticles: [],
    mixedTopStories: [],
    espnTop: [],
    foxSportsTop: [],
    nflTop: [],
    allScores: [],
    teamStats: [],
    currentSport: "nba",
    currentTeam: "",
    roster: [],
    schedule: []

};


let mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_DATA") {
        return {
            ...state,
            allArticles: action.items
        }
    } else if (action.type === "SET_ESPN") {
        return {
            ...state,
            espnTop: action.items
        }
    } else if (action.type === "SET_FOX") {
        return {
            ...state,
            foxSportsTop: action.items
        }
    } else if (action.type === "SET_NFL") {
        return {
            ...state,
            nflTop: action.items
        }
    } else if (action.type === "MIX_DATA") {
        let newEspn = [...state.espnTop];
        let newFoxSports = [...state.foxSportsTop];
        let newNFL = [...state.nflTop];
        return {
            ...state,
            mixedTopStories: [newEspn[0], newFoxSports[0], newNFL[0], newEspn[1], newFoxSports[1], newNFL[1], newEspn[2], newFoxSports[2], newNFL[2]]
        }
    } else if (action.type === "SET_SCORES") {
        return {
            ...state,
            allScores: action.items
        }
    } else if (action.type === "SET_SPORT") {
        return {
            ...state,
            currentSport: action.item
        }
    } else if (action.type === "SET_STATS") {
        return {
            ...state,
            teamStats: action.items
        }
    } else if (action.type === "SET_TEAM") {
        return {
            ...state,
            currentTeam: action.item
        }
    } else if (action.type === "SET_ROSTER") {
        return {
            ...state,
            roster: action.items

        }
    } else if (action.type === "SET_SCHEDULE") {
        return {
            ...state,
            schedule: action.items
        }
    } else {
        return {
            ...state,
        }
    }
};

export default mainReducer;