import axios from "axios";
let config = require('./config.js');



let addZero = (num) => {
    let newNum = num;
    if (newNum <= 9) {
        newNum = "0" + num;
    }
    return newNum;
};
let newDate = new Date();
let year = newDate.getFullYear();
let month = addZero(parseInt(newDate.getMonth()) + 1);
let day = addZero(parseInt(newDate.getDate()) - 1);



export function getSchedule(sportStr, teamStr) {
    if (sportStr === "mlb") {
        if (parseInt(month)<= 11 && parseInt(month) >= 4) {
            return (dispatch) => {
                axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${sportStr}/${year}-regular/full_game_schedule.json?team=${teamStr}&&date=from-today-to-4-weeks-from-now`, config).then((response) => {
                    dispatch(setSchedule(response.data.fullgameschedule.gameentry));
                }).catch((error) => {
                    throw error
                })
            }
        } else {
            return setSchedule(["This Sport is in The Offseason! Check back closer to the beginning of the Regular Season"]);
        }
    } else if (sportStr === "nfl") {
        console.log(parseInt(month));
        if (parseInt(month) >= 8 || parseInt(month) <= 2) {
            return (dispatch) => {
                axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${sportStr}/${year}-regular/full_game_schedule.json?team=${teamStr}`, config).then((response) => {
                    dispatch(setSchedule(response.data.fullgameschedule.gameentry));
                }).catch((error) => {
                    throw error
                })
            }
        } else {
            return setSchedule(["This Sport is in The Offseason! Check back closer to the beginning of the Regular Season"]);
        }
    } else if (sportStr === "nba") {
        if (parseInt(month) >= 10 || parseInt(month) <= 4) {
            return (dispatch) => {
                axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${sportStr}/${year}-regular/full_game_schedule.json?team=${teamStr}&&date=from-today-to-4-weeks-from-now`, config).then((response) => {
                    dispatch(setSchedule(response.data.fullgameschedule.gameentry));
                }).catch((error) => {
                    throw error
                })
            }
        } else {
            console.log("No data")
            return setSchedule(["This Sport is in The Offseason! Check back closer to the beginning of the Regular Season"]);
        }
    } else if(sportStr === "nhl"){
        if(parseInt(month) >= 10 || parseInt(month) <= 4){
            return (dispatch) => {
                axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${sportStr}/${year}-regular/full_game_schedule.json?team=${teamStr}&&date=from-today-to-4-weeks-from-now`, config).then((response) => {
                    dispatch(setSchedule(response.data.fullgameschedule.gameentry));
                }).catch((error) => {
                    throw error
                })
            }
        } else {
            return setSchedule(["This Sport is in The Offseason! Check back closer to the beginning of the Regular Season"]);
        }
    }

}


export function getRoster(sportStr, teamStr) {
    return (dispatch) => {
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${sportStr}/${year - 1}-${year}-regular/roster_players.json?fordate=${year}${month}${day}&team=${teamStr}`, config).then((response) => {
            dispatch(setRoster(response.data.rosterplayers.playerentry))
        }).then(()=>{
            dispatch(getSchedule(sportStr, teamStr))
        }).catch((error) => {
            throw error
        })
    }

}

export function getIndStats(str) {
    return (dispatch) => {
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/${str}/${year - 1}-${year}-regular/overall_team_standings.json`, config).then((response) => {
            dispatch(setStats(response.data.overallteamstandings.teamstandingsentry));
        })
    }

}

export function scoreData() {
    return (dispatch) => {
        axios.get(`https://api.mysportsfeeds.com/v1.1/pull/mlb/2017-regular/scoreboard.json?fordate=${year}${month}${day}`, config).then((response) => {
            dispatch(setScores(response.data.scoreboard.gameScore))
        }).catch((error) => {
            throw error
        })
    }
}

export function loadData(url = `https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`) {
    return (dispatch) => {
        axios.get(`${url}`).then((response) => {
            dispatch(setData(response.data.articles))
        }).then(() => {
            dispatch(loadTopESPN());
        }).catch((error) => {
            throw error
        })
    }
}

export function loadTopESPN() {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`).then((response) => {
            dispatch(setTopESPN(response.data.articles));
        }).then(() => {
            dispatch(loadTopFoxSports());
        }).catch((error) => {
            throw error
        })
    }
}

export function loadTopFoxSports() {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`).then((response) => {
            dispatch(setTopFoxSports(response.data.articles));
        }).then(() => {
            dispatch(loadTopNFL());
        }).catch((error) => {
            throw error
        })
    }
}

export function loadTopNFL() {
    return (dispatch) => {
        axios.get(` https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=0f683a77678046878ea0e075733292ba`).then((response) => {
            dispatch(setTopNFL(response.data.articles));
        }).then(() => {
            dispatch(mixData());
        }).catch((error) => {
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

export function setSport(item) {
    return {
        type: "SET_SPORT",
        item
    }
}

export function setStats(items) {
    return {
        type: "SET_STATS",
        items
    }
}

export function setTeam(item) {
    return {
        type: "SET_TEAM",
        item
    }
}

export function setRoster(items) {
    return {
        type: "SET_ROSTER",
        items
    }

}

export function setSchedule(items) {
    return {
        type: "SET_SCHEDULE",
        items
    }

}

