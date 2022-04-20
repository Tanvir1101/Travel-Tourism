const UserShowAds = ({image})=>{
    return(
        <>

        <tr>

            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
                
        </tr>

        </>
    );
}

export default UserShowAds;