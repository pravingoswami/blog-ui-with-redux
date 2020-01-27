import axios from 'axios'

export const setUsers = (users) => {
    return{type : "SET_USERS", payload : users}
}

export const startGetUSers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data)
                dispatch(setUsers(response.data))
            })

            .catch(err => alert(err))
    }
}