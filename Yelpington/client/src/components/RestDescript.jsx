import "../CSS/restdescript.css"

const RestDescript = (props) => {
    const {resturaunt} = props
    let restHoursArray = Object.entries(resturaunt.hours) 
    return ( 
    <>
    <h5><span className="bold">Name:</span> {[resturaunt.name]}</h5>
        <br/>
    <h5><span className="bold">Cuisine:</span> {[resturaunt.cuisine]}</h5>
        <br/>
    <h5><span className="bold">Address:</span> {[resturaunt.address]}</h5>
        <br/>
        <h5 className="bold">Hours:</h5>
        {restHoursArray.map(hour =>(
            <ul>
                <li>{[hour]}</li>
            </ul>
        ))}
        <br/>
    <h5><span className="bold">Phone Number:</span> {[resturaunt.phoneNumber]}</h5>
        <br/>
    <h5><span className="bold">Description:</span> {[resturaunt.about]}</h5>
    </> 
    );
}
 
export default RestDescript;