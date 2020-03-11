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