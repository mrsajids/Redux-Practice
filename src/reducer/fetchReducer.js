//step 1
export const fetchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCHDATA_REQUEST':
            return {loading:true, data:action.payload}
        case 'FETCHDATA_SUCCESS':
            return {loading:false, data:action.payload}
        case 'FETCHDATA_FAIL':
            return {loading:false, data:action.payload}
        default:
            return state
    }
}