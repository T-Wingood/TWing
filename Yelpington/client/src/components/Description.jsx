import { Routes, Route} from "react-router-dom"
import RestDescript from "../components/RestDescript"


const Description = (props) => {
    const {resturaunts} = props
    
    return ( 
    <>
    {resturaunts.map(resturaunt =>( 
     <Routes>
        <Route path = {`${resturaunt.name.split(" ").join("")}`} element = {<RestDescript resturaunt = {resturaunt}/>} />
    </Routes>
    ))}

    </> );
}
 
export default Description;