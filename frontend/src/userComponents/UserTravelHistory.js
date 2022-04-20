const UserTravelHistory = ({id, user_id, package_id, place, image})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{user_id}</td>
            <td>{package_id}</td>
            <td>{place}</td>
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
                
        </tr>

        </>
    );
}

export default UserTravelHistory;