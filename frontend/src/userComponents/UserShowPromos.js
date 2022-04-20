const UserShowPromos = ({image, message})=>{
    return(
        <>

        <tr>

            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>{message}</td>
                
        </tr>

        </>
    );
}

export default UserShowPromos;