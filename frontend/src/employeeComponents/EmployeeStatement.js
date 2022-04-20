const EmployeeStatement = ({id, month, revenue, cost, profit})=>{
    return(

        <tr>
            <td>{id}</td>
            <td>{month}</td>
            <td>{revenue}</td>
            <td>{cost}</td>
            <td>{profit}</td>
        </tr>

      
    );
}

export default EmployeeStatement;