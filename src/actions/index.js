import axios from "axios";

let config ={
    auth: {
        username: "dakotaheninger" ,
        password: "dh1133094"
    }
};


let addZero = (num) =>{
    let newNum = num;
    if(newNum <= 9){
       newNum  = "0" + num;
    }
    return newNum;
};
let newDate = new Date();
let year = newDate.getFullYear();
let month = addZero(parseInt(newDate.getMonth()) + 1);
let day = addZero(parseInt(newDate.getDate()) - 1);


export function scoreData(){
    console.log(month);
    return (dispatch) =>{
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/mlb/2017-regular/scoreboard.json?fordate=${year}${month}${day}`,  config).then((response)=>{
            console.log(response.data.scoreboard.gamescore);
            dispatch(setScores(response.data.scoreboard.gameScore))
        }).catch((error)=>{
            throw error
        })
    }
}

export function loadData(url = `https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`) {
    return (dispatch) => {
        axios.get(`${url}`).then((response) =>{
            dispatch(setData(response.data.articles))
        }).then(()=>{
            dispatch(loadTopESPN());
        }).catch((error)=>{
            throw error
        })
    }
}

export function loadTopESPN() {
    return (dispatch) =>{
        axios.get(`https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`).then((response) =>{
            dispatch(setTopESPN(response.data.articles));
        }).then(()=>{
            dispatch(loadTopFoxSports());
        }).catch((error)=>{
            throw error
        })
    }
}

export function loadTopFoxSports() {
    return (dispatch) =>{
        axios.get(`https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`).then((response) =>{
            dispatch(setTopFoxSports(response.data.articles));
        }).then(()=>{
            dispatch(loadTopNFL());
        }).catch((error)=>{
            throw error
        })
    }
}

export function loadTopNFL() {
    return (dispatch) =>{
        axios.get(` https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`).then((response) =>{
            dispatch(setTopNFL(response.data.articles));
        }).then(()=>{
            dispatch(mixData());
        }).catch((error)=>{
            throw error
        })
    }
}
export function setScores(items) {
    return {
        type: "SET_SCORES",
        items
    }
}

export function setData(items) {
    return {
        type: "SET_DATA",
        items
    }

}

export function setTopESPN(items) {
    return {
        type: "SET_ESPN",
        items

    }
}

export function setTopFoxSports(items) {
    return {
        type: "SET_FOX",
        items

    }
}

export function setTopNFL(items) {
    return {
        type: "SET_NFL",
        items
    }
}

export function mixData() {
    return {
        type: "MIX_DATA"
    }

}
