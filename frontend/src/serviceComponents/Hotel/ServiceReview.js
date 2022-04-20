
const ServiceReview = ({id, service_id, service_type, company, user_id,rating,msg})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{service_id}</td>
            <td>{service_type}</td>
            <td>{company}</td>
            <td>{user_id}</td>
            <td>{rating}</td>
            <td>{msg}</td>
        </tr>

        </>
    );
}

export default ServiceReview;