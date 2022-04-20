import UserTravelGuideline from './UserTravelGuideline';

const UserShowGuideline = ({list})=>{
console.log(list);

    return(
        <div>
            
            <div dangerouslySetInnerHTML={{ __html: list.guideline }} />;
            
        </div>
    )
}

export default UserShowGuideline;