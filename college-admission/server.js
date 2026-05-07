const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 1. Database Connection
const mongoURI = 'mongodb://127.0.0.1:27017/collegeDB';
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to College Admission Database (Full CRUD Ready)"))
    .catch(err => console.error("Database connection error:", err));

// 2. Data Schema & Model
const admissionSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    status: { type: String, default: 'Pending' }
});

const Admission = mongoose.model('Admission', admissionSchema);

// --- CRUD ROUTES ---

// [CREATE] - POST: Add a new student application
app.post('/api/admissions', async (req, res) => {
    try {
        const student = new Admission(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// [READ] - GET: Fetch all student applications
app.get('/api/admissions', async (req, res) => {
    try {
        const students = await Admission.find();
        res.status(200).send(students);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// [UPDATE] - PUT: Modify a student's data or status by ID
app.put('/api/admissions/:id', async (req, res) => {
    try {
        const updatedStudent = await Admission.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedStudent) return res.status(404).send("Student not found");
        res.status(200).send(updatedStudent);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

// [DELETE] - DELETE: Remove a student application by ID
app.delete('/api/admissions/:id', async (req, res) => {
    try {
        const deletedStudent = await Admission.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).send("Student not found");
        res.status(200).send({ message: "Record deleted successfully", deletedStudent });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// 3. Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));