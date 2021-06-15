import classes from './Users.module.css'

let usersArray = [
    {id: 1, isFollowed: true, fullName: 'Lev', location: {city: 'Rome', country: 'Italy'}},
    {id: 2, isFollowed: false, fullName: 'Ulius', location: {city: 'Rome', country: 'Italy'}},
    {id: 3, isFollowed: false, fullName: 'Michail', location: {city: 'Rostov', country: 'Russia'}},
    {id: 4, isFollowed: true, fullName: 'Jan', location: {city: 'New-York', country: 'USA'}},
]
const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(usersArray);
    }

    const follow = (userId) => {
        props.follow(userId);
    }
    const unfollow = (userId) => {
        props.unfollow(userId);
    }
    let users = props.users.map(
        u => <div className={classes.user}>
            <div>{u.fullName}</div>
            <div>{u.location.city}, {u.location.country}</div>
            {u.isFollowed ? <button onClick={() => unfollow(u.id)}>unfollow</button> :
                <button onClick={() => follow(u.id)}>follow</button>}
        </div>
    );

    return (
        <div className={classes.users}>{users}</div>
    )
}

export default Users;