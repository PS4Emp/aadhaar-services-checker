const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/check-eligibility', async (req, res) => {
    const { aadhaarNumber } = req.body;
    if (!aadhaarNumber) {
        return res.status(400).json({ message: 'Aadhaar number is required' });
    }

    try {
        const apiResponse = await axios.get(`https://aadhaarapi.example.com/verify?number=${aadhaarNumber}`, {
            headers: {
                'Authorization': `Bearer ${process.env.AADHAAR_API_KEY}`
            }
        });
        
        // Simulate fetching eligibility details
        const eligibilityDetails = {
            schemes: ['Scheme A', 'Scheme B'],
            services: ['Service X', 'Service Y']
        };

        res.status(200).json({ eligibilityDetails });
    } catch (error) {
        console.error('Error verifying Aadhaar number:', error);
        res.status(500).json({ message: 'Error verifying Aadhaar number' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
