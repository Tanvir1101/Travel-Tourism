const EmployeeTransport = ({id, name, phone, email, type, req})=>{
    return(
        <>

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{type}</td>
            <td>{req}</td>
        </tr>

        </>
    );
}

export default EmployeeTransport;