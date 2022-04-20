
const AdminPlace = ({id, place, district, image, adminPlaceDeleteCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{district}</td>
            {/* <td>{image}</td> */}
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>
                <button className='delete-button' onClick={()=>adminPlaceDeleteCallback(id)}>Delete</button>
            </td>
        </tr>

        </>
    );
}

export default AdminPlace;