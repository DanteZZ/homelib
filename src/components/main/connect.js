const connector = ({ main: { loaded }, user: { isAuth } }) => 
    ({
        isLoaded: loaded,
        isAuth
    })
export default connector