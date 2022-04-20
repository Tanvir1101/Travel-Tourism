const UserHotelFacility = ({id, title, description, image})=>{

    return(
        <>
        
        <tr>

            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            
        </tr>
        
        
        </>
    );
}

export default UserHotelFacility;