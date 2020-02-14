import axios from 'axios'

export const setComments = (comments) => {
    return {type : 'SET_COMMENTS', payload : comments}
}

export const startGetComments = () => {
    return (dispatch) => {
        axios.get('https://dct-cors.herokuapp.com/https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                dispatch(setComments(response.data))
            })

            .catch(err => alert(err))
    }
}