const express = require('express');
const router = express.Router();

const Events = require('../models/event.model');
const seedData = require('../db/dummyData');

// Get All Events API
router.get('/', async (req, res) => {
  try {
    const events = await getAllEvents();
    if(events.length === 0){
      seedData(addEvent, "events");
    }
    res.status(200).json({ message: "Found Events", events });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

async function getAllEvents(){
  try {
    const events = await Events.find();
    return events;
  } catch (error) {
    throw error;
  }
}

// Create New Event API
router.post('/', async (req, res) => {
  try {
    const eventData = req.body;
    const event = await addEvent(eventData);
    res.status(201).json({ message: "Event Created", event });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

async function addEvent(eventData){
  try {
    const newEvent = new Events(eventData);
    const createdEvent = await newEvent.save();
    return createdEvent;
  } catch (error) {
    throw error;
  }
}

// Update Existing Event API
router.post('/:eventId', async (req, res) => {
  try{
    const { eventId } = req.params;
    const updatedData = req.body;
    const event = await updateEvent(eventId, updatedData);
    res.status(200).json({
      message: "Event Updated",
      event,
    })
  }catch(e){
    res.status(500).json({
      error: e.message,
    });
  }
})

async function updateEvent(eventId, updatedData){
  try{
    const event = await Events.findOne({ _id: eventId });
    if(!event){
      throw new Error("Event Not Found");
    }
    const updatedEvent = await Events.findByIdAndUpdate(eventId, updatedData);
    return updatedEvent;
  }catch(e){
    throw e;
  }
}

// Delete Event API
router.delete("/:eventId", async (req, res) => {
  try{
    const { eventId } = req.params;
    const event = await deleteEvent(eventId);
    res.status(200).json({
      message: "Event Deleted",
    })
  }catch(e){
    res.status(500).json({
      error: e.message,
    });
  }
})

async function deleteEvent(eventId){
  try{
    const event = Events.findOne({ _id: eventId });
    if(!event){
      throw new Error("Event Not Found");
    }
    await Events.findByIdAndDelete(eventId);
  }catch(e){
    throw e;
  }
}

module.exports = router;