const express = require('express');
const router = express.Router();
const dryCleaningController = require('../controllers/dryCleaningController');
const DryCleaningOrder = require('../models/DryCleaningOrder');
const { route } = require('./dryCleaningRoutes');
// Route to schedule a pickup
router.post('/schedule', dryCleaningController.schedulePickup);

// Route to get the checklist items (Optional if you want to store this data on the backend)
router.get('/checklist', dryCleaningController.getChecklist);

// Route to get the process details (Optional)
router.get('/process', dryCleaningController.getProcess);

router.get('/', async (req, res) => {
    try {
        const orders = await DryCleaningOrder.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const order = await DryCleaningOrder.findById(req.params.id);
        if (!order) return res.status(404).json({
            message: 'order not found'
        });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

router.put('/:id', async (req, res) => {
    const { shirts, pants, dresses, suits, pickupdate, pickupTime, phoneNumber, address, pincode } = req.body;

    try {
        const order = await DryCleaningOrder.findByIdAndUpdate(req.params.id, {
            shirts, pants, dresses, suits, pickupdate, pickupTime, phoneNumber, address, pin
        }, { new: true });
        if (!order) return res.status(404).json({
            message: 'order not found'
        });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) =>{
    try {
        const order = await DryCleaningOrder.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'order not found' });
        res.json({
            message: 'order deleted successfully'
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})






module.exports = router;
