const app = require('express')();
const covid19 = require('covid19-data');

app.use('/indonesia', async (req, res) => {
    const covid19Data = await covid19.getData();
    res.json(covid19Data.indonesia);
})

app.use('/global', async (req, res) => {
    const covid19Data = await covid19.getData();
    res.json(covid19Data.global);
})

app.listen(2020, (ev) => {
    console.log('server running on port 2020')
})