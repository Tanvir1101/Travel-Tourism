import UserPrivacyPolicy from './UserPrivacyPolicy';

const UserShowPrivacyPolicy = ({list})=>{
console.log(list);

    return(
        <div>
            
            <div dangerouslySetInnerHTML={{ __html: list.policy }} />;
            
        </div>
    )
}

export default UserShowPrivacyPolicy;