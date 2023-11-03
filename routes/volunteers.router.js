const express = require('express');
const router = express.Router();

const Volunteers = require('../models/volunteer.model');
const seedData = require('../db/dummyData');

// Get All Volunteers API
router.get('/', async (req, res) => {
  try {
    const volunteers = await getAllVolunteers();
    if (volunteers.length === 0) {
      seedData(addVolunteer, "volunteers");
    }
    res.status(200).json({ message: "Found Volunteers", volunteers });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

async function getAllVolunteers() {
  try {
    const volunteers = await Volunteers.find();
    return volunteers;
  } catch (error) {
    throw error;
  }
}

// Create New Volunteer API
router.post('/', async (req, res) => {
  try {
    const volunteerData = req.body;
    const volunteer = await addVolunteer(volunteerData);
    res.status(201).json({ message: "Volunteer Created", volunteer });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

async function addVolunteer(volunteerData) {
  try {
    const newVolunteer = new Volunteers(volunteerData);
    const createdVolunteer = await newVolunteer.save();
    return createdVolunteer;
  } catch (error) {
    throw error;
  }
}

// Update Existing Volunteer API
router.post('/:volunteerId', async (req, res) => {
  try{
    const { volunteerId } = req.params;
    const updatedData = req.body;
    const volunteer = await updateVolunteer(volunteerId, updatedData);
    res.status(200).json({
      message: "Volunteer Updated",
      volunteer,
    })
  }catch(e){
    res.status(500).json({
      error: e.message,
    });
  }
})

async function updateVolunteer(volunteerId, updatedData){
  try{
    const volunteer = await Volunteers.findOne({ _id: volunteerId });
    if(!volunteer){
      throw new Error("Volunteer Not Found");
    }
    const updatedVolunteer = await Volunteers.findByIdAndUpdate(volunteerId, updatedData);
    return updatedVolunteer;
  }catch(e){
    throw e;
  }
}

// Delete Volunteer API
router.delete("/:volunteerId", async (req, res) => {
  try{
    const { volunteerId } = req.params;
    const volunteer = await deleteVolunteer(volunteerId);
    res.status(200).json({
      message: "Volunteer Deleted",
    })
  }catch(e){
    res.status(500).json({
      error: e.message,
    });
  }
})

async function deleteVolunteer(volunteerId){
  try{
    const volunteer = Volunteers.findOne({ _id: volunteerId });
    if(!volunteer){
      throw new Error("Volunteer Not Found");
    }
    await Volunteers.findByIdAndDelete(volunteerId);
  }catch(e){
    throw e;
  }
}

module.exports = router;