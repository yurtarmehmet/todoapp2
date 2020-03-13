import {HomePage, OtherPage, TodoDetail, ProtectedPage} from "./containers";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "Other Page",
        path : "/other",
        component: OtherPage
    },
    {
        name: "Todo Detail",
        path : "/todoDetay/:id",
        component: TodoDetail,
        excluded: true
    },
    {
        name: "ProtectedPage",
        path : "/protectedPage",
        component: ProtectedPage
    },
];

export default routes;