import axios from 'axios'

export const setImages = (images) => {
    return {type : 'SET_IMAGES', payload : images}
} 

export const startGetImages = () => {
    return (dispatch) => {
        axios.get('https://picsum.photos/v2/list?page=2&limit=100')
            .then(response => {
                dispatch(setImages(response.data))
            })

            .catch(err => alert(err))
    }
}