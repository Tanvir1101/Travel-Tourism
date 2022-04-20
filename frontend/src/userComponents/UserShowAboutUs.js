import UserAboutUs from './UserAboutUs';

const UserShowAboutUs = ({list})=>{
console.log(list);

    return(
        

        <div>
            
            <div dangerouslySetInnerHTML={{ __html: list.about }} />;
            
        </div> 

       
    )
}

export default UserShowAboutUs;