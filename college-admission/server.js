const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// 1. MongoDB Connection (Fixed: Deprecated options removed)
// If localhost fails, use 127.0.0.1
const mongoURI = 'mongodb://127.0.0.1:27017/collegeDB';

mongoose.connect(mongoURI)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.error("Database connection error:", err));

// 2. Define Admission Schema
const admissionSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    status: { type: String, default: 'Pending' }, // Options: Pending, Approved, Rejected
    applicationDate: { type: Date, default: Date.now }
});

const Admission = mongoose.model('Admission', admissionSchema);

// --- API ROUTES ---

// 3. POST API: Create a new application (Needed to seed data)
app.post('/api/admissions', async (req, res) => {
    try {
        const newEntry = new Admission(req.body);
        const savedEntry = await newEntry.save();
        res.status(201).send(savedEntry);
    } catch (error) {
        res.status(400).send({ message: "Error creating application", error: error.message });
    }
});

// 4. GET API: Retrieve all admission applications
app.get('/api/admissions', async (req, res) => {
    try {
        const applications = await Admission.find();
        res.status(200).send(applications);
    } catch (error) {
        res.status(500).send({ message: "Error fetching applications", error: error.message });
    }
});

// 5. GET API: Retrieve a single application by ID
app.get('/api/admissions/:id', async (req, res) => {
    try {
        const application = await Admission.findById(req.params.id);
        if (!application) return res.status(404).send({ message: "Application not found" });
        res.status(200).send(application);
    } catch (error) {
        res.status(500).send({ message: "Invalid ID format or Server Error", error: error.message });
    }
});

// 6. PUT API: Update an admission record (Update status or course)
app.put('/api/admissions/:id', async (req, res) => {
    try {
        const updatedApp = await Admission.findByIdAndUpdate(
            req.params.id,
            {
                studentName: req.body.studentName,
                course: req.body.course,
                status: req.body.status
            },
            { new: true, runValidators: true } // 'new' returns the updated doc
        );

        if (!updatedApp) return res.status(404).send({ message: "Application not found" });
        res.status(200).send(updatedApp);
    } catch (error) {
        res.status(400).send({ message: "Error updating application", error: error.message });
    }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});