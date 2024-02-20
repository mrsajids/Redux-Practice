import { useDispatch, useSelector } from "react-redux"
import { fetchAction } from "../action/fetchAction"

const Home = () => {
    const dispatch=useDispatch()
    const {data,loading}=useSelector(state=>state.fetch)

  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=>dispatch(fetchAction)}> Click me</button>
        {
            loading?'loading':<h1>'kk'</h1>
        }

    </div>
  )
}
export default Home