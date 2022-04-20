const EmployeeAdvertisement = ({id, message, employeeAdvertisementDeletecallback})=>{
    return(
        

        <tr>
            <td>{message}</td>
            <td><button className='delete-button' onClick={()=>employeeAdvertisementDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeeAdvertisement;