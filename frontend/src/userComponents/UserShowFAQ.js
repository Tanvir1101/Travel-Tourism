import UserFAQ from './UserFAQ';

const UserShowFAQ = ({list})=>{
    console.log(list);

    return(
        <div>
            {
                list.map((showFAQ)=>{
                    return <UserFAQ {...showFAQ} />
                })
            }
        </div>
    )
}

export default UserShowFAQ;