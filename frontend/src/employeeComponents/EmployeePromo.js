const EmployeePromo = ({id, message, employeePromoDeletecallback})=>{
    return(
        

        <tr>
            
            <td>{message}</td>
            <td><button className='delete-button' onClick={()=>employeePromoDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeePromo;