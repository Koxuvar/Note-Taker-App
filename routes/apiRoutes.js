const notesData = require('../db/db.json');


module.exports = (app) =>
{
    app.get('/api/notes', (req, res) => res.json(notesData));

    app.post('/api/notes', (req, res) =>
    {
        notesData.push(req.body);
        res.send(true);
    });

    app.delete('/api/notes/:id', (req, res) =>
    {
        console.log(req.params.id);
        

        //array.splice(notesData, notesData.indexOf(toDEl));
    });
}