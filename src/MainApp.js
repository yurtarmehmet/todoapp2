import React from 'react';
import App from "./App";
import {Switch, Route, Link, Redirect} from "react-router-dom";
import OtherPage from "./OtherPage";
import TodoDetail from "./TodoDetail";
import ProtectedPage from "./ProtectedPage";
import routes from "./routes";


const isLoggedIn = true;

const MainApp = () => {
    return (
        <div>
            <div>
                <h1>Header</h1>
                <ul>
                    <li><Link to="/">
                        Anasayfa
                    </Link></li>
                    <li>
                        <Link to="/other">
                            Other Page
                        </Link>
                    </li>
                </ul>
            </div>
            <Switch>
                { routes.map((route) => {
                    return <Route path={route.path} component={route.component}/>
                })}
                <Route exact path="/todoDetay/:id" component={(props) => <TodoDetail {...props}/>} />
                <Route exact path="/protectedPage" component={(props) => {
                    if(isLoggedIn){
                        return <ProtectedPage />
                    }else {
                        return <Redirect to="/other" />
                    }
                    }} />
            </Switch>
            <div>Footer</div>
        </div>
    );
};

export default MainApp;