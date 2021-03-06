import request from 'superagent'
import _ from 'lodash'


export const getDogs = () => {
    return (dispatch, getState) => {
        const dogsList = getState().dogs
        if(dogsList !== null) return

        request.get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                dispatch({
                    type: 'SET_DOGS_LIST', 
                    payload: Object.keys(response.body.message)
                })
            })
    }
}

// 'Async' action creatores a.k.a. reduxthunk
export const getRandomDog = () => {
    return (dispatch, getState) => {
        const dogsList = getState().dogs

        if(dogsList === null) {
            const dogsList = getState().dogs
            if(dogsList !== null) return
    
            request.get('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    dispatch({
                        type: 'SET_DOGS_LIST', 
                        payload: Object.keys(response.body.message)
                    });

                    const randomDog = _.sample(Object.keys(response.body.message))
                    request.get(`https://dog.ceo/api/breed/${randomDog}/images/random`)
                        .then(response => {
                            dispatch({
                                type: 'SET_RANDOM_IMAGE_URL',
                                payload: response.body.message
                            })
                        })
                })
        } else{
            const randomDog = _.sample(getState().dogs)

            request.get(`https://dog.ceo/api/breed/${randomDog}/images/random`)
                .then(response => {
                    dispatch({
                        type: 'SET_RANDOM_IMAGE_URL',
                        payload: response.body.message
                    })
                })
        }

    }
}

// 'Normal' action creators
export function giveAnswer(answer){
    return {
        type: 'GIVE_ANSWER',
        payload: answer
    }
}
