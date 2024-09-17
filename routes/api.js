// Import package
const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

// Helper function to generate unique ids
const uuid = require('../helpers/uuid');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
// Create GET route to read saved notes in json file
// Used Expert Learning Assistant for lines 12-18
// Used async/await to handle the asynchronous nature of fs.readFile
router.get('/notes', async (req, res) => {
    try {
        const notes = await fs.readFile(path.join(__dirname, '..db/db.json'));
        res.json(JSON.parse(notes));
    } catch (error) {
        res.status(500).json({ message: 'error' });
    }
});


// POST /api/notes should receive a new note to save on the request body
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    // Read the existing notes from db.json
    fs.readFile(path.join(__dirname, '..db/db.json'), 'utf8', (err, notes) => {
        if (err) {
            return res.status(500).json({ error: 'error' });
        }

        // if notes are present
        if (notes) {
            // create a new note
            const newNote = {
                title,
                text,
                id: uuid(),
            };

            // parse existing notes
            const note = JSON.parse(notes);
            // add new note to the notes array
            note.push(newNote);

            // Add it to the db.json file and then return the new note to the client
            fs.writeFile(path.join(__dirname, '..db/db.json'), JSON.stringify(note), (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to save note' });
                } else {
                    res.json(newNote);
                }
            });
        };
    });
});


// Export apiRoutes
module.exports = router;