import { createRouter, createWebHistory } from "vue-router";

import dashboard from '../pages/master/dashboard'
    
    const routes = [
        {
            name: 'dashboard',
            path: '/',
            compenent: dashboard

        }
    ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}