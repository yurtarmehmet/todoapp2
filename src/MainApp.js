import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import {Layout} from "./components";
import routes from "./routes";
import {connect} from "react-redux";
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const MainApp = (props) => {
    return (
        <div>
            <Switch>
                { routes.map((route) => {
                    const ChildComp = route.component;
                    return <>
                        <div>
                            <Route exact path={route.path} key={route.path} component={(props) => <Layout.PageWrapper name={route.name} >
                                <Layout.Header {...props} />
                                <ChildComp {...props} />
                            </Layout.PageWrapper>}/>
                        </div>
                    </>
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