
const AdminPlaceAD = ({id, place, district, image, adminPlaceApproveCallback, adminPlaceDeclineCallback})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{place}</td>
            <td>{district}</td>
            {/* <td>{image}</td> */}
            <td><img className="userimg" src={process.env.PUBLIC_URL + "/images/" + image}/></td>
            <td>
                <button className='approve-button' onClick={()=>adminPlaceApproveCallback(id)}>Approve</button>
                <button className='delete-button' onClick={()=>adminPlaceDeclineCallback(id)}>Decline</button>
            </td>
        </tr>

        </>
    );
}

export default AdminPlaceAD;