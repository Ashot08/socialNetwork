import classes from './Users.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let countPages = (totalCount, countPerPage) => {
        let pages = [];
        for (let i = 1; i <= Math.ceil(totalCount / countPerPage); i++) {
            pages.push(i);
        }
        return pages;
    }

    return (
        <div className={classes.users}>{
            props.users.map(
                u =>
                    <div className={classes.user}>
                        <NavLink to={"/profile/" + u.id}>
                            <div>{u.name}</div>
                            <div><img src={u.photos.small} alt="avatar"/></div>
                        </NavLink>
                        {u.followed ? <button disabled={props.toggleFollowingIds.some(id => id === u.id)}
                                              onClick={() => props.unfollow(u.id)}>unfollow</button> :
                            <button disabled={props.toggleFollowingIds.some(id => id === u.id)}
                                    onClick={() => props.follow(u.id)}>follow</button>}
                    </div>
            )}
            <div className={classes.pagination}>{
                countPages(props.totalCount, props.countPerPage).map(
                    p => <span className={(props.currentPage == p) ? classes.active : ''} onClick={
                        (e) => {
                            props.setCurrentPage(p);
                        }
                    }>{p}</span>
                )
            }
            </div>
        </div>
    )

}

export default Users;