const uid = require('uniqid');
const fs = require('fs');
const path = require('path');

module.exports = (app) =>
{
    app.get('/api/notes', (req, res) => 
    {
        let arrofNotes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
        res.json(JSON.parse(arrofNotes));
    });

    app.post('/api/notes', (req, res) =>
    {
        const id = uid();
        const obj = {'id': id, 'title': req.body.title, 'text': req.body.text};
        let arrofNotes = eval(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
        arrofNotes.push(obj);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(arrofNotes), (err) =>
        {
            if(err) throw err;
            console.log('Notes updated');
            
        });
        res.send(true);
        
    });

    app.delete('/api/notes/:id', (req, res) =>
    {
        const id = req.params.id;
        let arrofNotes = eval(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
        arrofNotes.splice(arrofNotes.indexOf(id), 1);
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(arrofNotes), (err) =>
        {
            if(err) throw err;
            console.log('Notes updated');
            
        });
        res.send(true);
    });
}