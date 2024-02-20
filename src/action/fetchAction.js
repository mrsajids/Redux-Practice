// step 2
const data={
    "name":"mobile",
    "qty":10
}
export const fetchAction=(dispach)=>{
    try {
        dispach({type:'FETCHDATA_REQUEST'})
        dispach({
            type:'FETCHDATA_SUCCESS',
            payload:data
        })
    } catch (error) {
        dispach({
            type:'FETCHDATA_FAIL',
            payload:data
        })
    }
}
