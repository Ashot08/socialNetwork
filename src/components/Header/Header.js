import classes from './Header.module.css';

let Header = (props) => {
    return (
        <div className={classes.header}>
            <div>{props.state.isAuth ? props.state.login : 'Login'}</div>
        </div>
    );
}
export default Header;