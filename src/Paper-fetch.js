export const paperBase = (async () => {
        await fetch('./database/paper_base.json')
            .then((response) => response.json())
            .then((data) => {
                    // const paperList = JSON.stringify(data)
                    console.log(data)
                    const paperList = data
                return new Promise(resolve => {
                    return resolve(paperList)
                })
            })
}) ();
