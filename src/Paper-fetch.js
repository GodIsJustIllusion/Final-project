import {reactive} from "vue";

export const paperBase = reactive({
    data: {},

    async getListPaper() {
        await fetch('./database/paper_base.json')
            .then((response) => response.json())
            .then((data) => {
                paperBase.data = data
            });
    },
})

