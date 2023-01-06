const initialData = {
    stadiums : [],
};

export const stadReducer = (state=initialData , action) => {

    switch(action.type)
    {
        case 'GET_ALL_STADIUMS' : {
            return{
                ...state,
                stadiums : action.payload
            }
        }

        default:return state
    }

}

