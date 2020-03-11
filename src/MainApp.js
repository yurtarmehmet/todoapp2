import React from 'react';
import App from "./App";
import {Switch, Route, Link, Redirect} from "react-router-dom";
import OtherPage from "./OtherPage";
import TodoDetail from "./TodoDetail";
import ProtectedPage from "./ProtectedPage";
import PageWrapper from "./PageWrapper";
import routes from "./routes";
import {connect} from "react-redux";


const isLoggedIn = true;

const MainApp = (props) => {
    return (
        <div>
            <div>
                FROM REDUX : {props.exampleProp}
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
                    const ChildComp = route.component;
                    return <Route exact path={route.path} component={(props) => <PageWrapper name={route.name} >
                        <ChildComp {...props} />
                    </PageWrapper>}/>
                })}
            </Switch>
            <div>Footer</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        exampleProp: state.dataFromReduxStore
    }
};

export default connect(mapStateToProps)(MainApp);