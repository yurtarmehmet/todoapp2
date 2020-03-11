import React from 'react';
import App from "./App";
import {Switch, Route, Link, Redirect} from "react-router-dom";
import OtherPage from "./OtherPage";
import TodoDetail from "./TodoDetail";
import ProtectedPage from "./ProtectedPage";
import PageWrapper from "./PageWrapper";
import routes from "./routes";
import {connect} from "react-redux";


const MainApp = (props) => {
    return (
        <div>
            <div>
                <h1>Header</h1>
                <ul>
                    {
                        routes.map((route) => {
                            if(!route.excluded){
                                return <li key={route.path}><Link to={route.path}>
                                    {route.name}
                                </Link></li>
                            }
                        })
                    }
                </ul>
            </div>
            <Switch>
                { routes.map((route) => {
                    const ChildComp = route.component;
                    return <Route exact path={route.path} key={route.path} component={(props) => <PageWrapper name={route.name} >
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