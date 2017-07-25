import axios from "axios";

export function loadData(url) {
    return (dispatch) => {
        axios.get(`${url}`).then((response) =>{
            console.log(response.data.articles);
            dispatch(setData(response.data.articles))
        }).catch((error)=>{
            throw error
        })
    }
}

export function setData(items) {
    return {
        type: "SET_DATA",
        items
    }

}