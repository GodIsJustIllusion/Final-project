import { createSSRApp, createApp } from 'vue';
import App from './App.vue';
import router from './router';

const isSSR = typeof window === 'undefined';

export default function () {

    const app = (isSSR ? createSSRApp(App) : createApp(App));

    app.use(router);

    // const Paper = fetch("/database/paper_base.json")
    //     .then((response) => response.json())
    //     .then((data) => {
    //      const paperList = JSON.stringify(data)
    //         console.log(paperList)
    //         return paperList
    //     });

    return {
        // Paper,
        app,
        router,
    };
}