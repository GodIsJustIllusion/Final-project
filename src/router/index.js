import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import HomePage from "@/components/Home-page";
import DigitalCalc from "@/components/Digital-calc";
import OffsetCalc from "@/components/Offset-calc";
import InteriorCalc from "@/components/Interior-calc";
import Schedule from "@/components/Schedule";

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
    },
    {
        path: '/digital-calc',
        name: 'Digital calc',
        component: DigitalCalc,
    },
    {
        path: '/offset-calc',
        name: 'Offset calc',
        component: OffsetCalc,
    },
    {
        path: '/interior-calc',
        name: 'Interior calc',
        component: InteriorCalc,
    },
    {
        path: '/schedule',
        name: 'Schedule-page',
        component: Schedule,
    }
];

const router = createRouter({
    history,
    routes,
});

export default router;