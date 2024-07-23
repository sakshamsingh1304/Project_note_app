const Notes = require("../models/notes.model");



async function createNote(req, res) {
    try {
        const { text } = req.body;
        const newNote = new Notes({
            text,
            user: req.usertoken,
        });

        await newNote.save();
        res.status(201).json(newNote);
    }   catch (error) {
        res.status(500).json({ message: "Error creating note", error });
    }
}

async function getNote(req, res) {
    try {
        const note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).json({message : "Note not found"});
        }
        res.json(note);
    }   catch (error) {
        res.status(500).json({message : "Error fetching note", error});
    }
}

async function getAllNotes(req, res) {
    //get all note
}

async function updateNote(req, res) {
    //get a single note
}

async function deleteNote(req, res) {
    //delete note
}

model.exports = {
    createNote,
    getNote,
    getAllNotes,
    updateNote,
    deleteNote
}