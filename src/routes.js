import React from "react";
import App from "./App";
import OtherPage from "./OtherPage";
import TodoDetail from "./TodoDetail";
import ProtectedPage from "./ProtectedPage";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: App
    },
    {
        name: "Other Page",
        path : "/otherPage",
        component: OtherPage
    }
];

export default routes;