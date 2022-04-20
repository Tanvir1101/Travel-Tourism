const EmployeeSalary = ({employee_id, salary, bonus})=>{
    return(
        <>

        <tr>
            <td>{employee_id}</td>
            <td>{salary}</td>
            <td>{bonus}</td>
        </tr>

        </>
    );
}

export default EmployeeSalary;