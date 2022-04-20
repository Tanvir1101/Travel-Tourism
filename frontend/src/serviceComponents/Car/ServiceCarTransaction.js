
const ServiceCarTransaction = ({id, date, receiver_id, receiver, username, description, amount})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{receiver_id}</td>
            <td>{receiver}</td>
            <td>{username}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>

        </>
    );
}

export default ServiceCarTransaction;