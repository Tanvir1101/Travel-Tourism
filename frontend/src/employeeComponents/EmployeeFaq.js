const EmployeeFaq = ({id, que, ans, employeeFaqDeletecallback})=>{
    return(
        

        <tr>
            <td>{que}</td>
            <td>{ans}</td>
            <td><button className='delete-button' onClick={()=>employeeFaqDeletecallback(id)}>Delete</button></td>
        </tr>

       
    );
}

export default EmployeeFaq;