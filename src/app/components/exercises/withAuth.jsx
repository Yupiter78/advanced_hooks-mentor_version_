import React, { useEffect, useState } from "react";
import CardWrapper from "../common/Card";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(localStorage.getItem("user") !== null);
    }, []);

    const onLogin = () => {
        setIsAuth(true);
        localStorage.setItem(
            "user",
            "data entered by the user during authorization"
        );
    };

    const onLogout = () => {
        setIsAuth(false);
        localStorage.removeItem("user");
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                onLogin={onLogin}
                onLogout={onLogout}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withAuth;
