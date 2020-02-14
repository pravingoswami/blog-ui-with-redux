import axios from 'axios'

export const setPosts = (posts) => {
    return {type : 'SET_POST', payload : posts}
}

export const startGetPosts = () => {
    return (dispatch) => {
        axios.get('https://dct-cors.herokuapp.com/https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch(setPosts(response.data))
            })

            .catch(err => alert(err))
    }
}