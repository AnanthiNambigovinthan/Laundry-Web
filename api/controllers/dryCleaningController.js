const DryCleaningOrder = require('../models/DryCleaningOrder');

// Schedule a pickup
exports.schedulePickup = async (req, res) => {
  try {
    const { shirts, pants, dresses, suits, pickupDate, pickupTime, notes, location, phoneNumber, address, pincode } = req.body;

    // Create a new dry cleaning order
    const newOrder = new DryCleaningOrder({
      shirts,
      pants,
      dresses,
      suits,
      pickupDate,
      pickupTime,
      notes,
      location,
      phoneNumber,
      address,
      pincode,
    });

    
    // Save the order to the database
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Pickup scheduled successfully!', order: savedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error scheduling pickup', error: error.message });
  }
};
// Get Pre-Pickup Checklist (Optional)
exports.getChecklist = (req, res) => {
  const checklist = [
    "Empty all pockets",
    "Inform us about any stains",
    "Separate lights and darks",
    "Button up shirts",
    "Zip up zippers",
    "Remove belt from pants",
  ];
  res.json(checklist);
};

// Get Our Process (Optional)
exports.getProcess = (req, res) => {
  const process = [
    { title: "Stain Removal", icon: "Droplet" },
    { title: "Gentle Cleaning", icon: "Wind" },
    { title: "Careful Packaging", icon: "Box" },
    { title: "Quick Turnaround", icon: "Clock" },
  ];
  res.json(process);
};


