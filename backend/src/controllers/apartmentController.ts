import { RequestHandler } from 'express';
import apartmentService from '../services/apartmentService';


export const getApartments: RequestHandler = async (req, res) => {
  try {
    const apartments = await apartmentService.getAll();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching apartments', error });
  }
};


export const getApartmentById: RequestHandler = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const apartment = await apartmentService.getById(id);
    if (!apartment) {
      res.status(404).json({ message: 'Apartment not found' });
      return;
    }
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching apartment details', error });
  }
};


export const createApartment: RequestHandler = async (req, res) => {
  try {
    const { unitName, unitNumber, project, description, price } = req.body;
    if (!unitName || !unitNumber || !project || !price) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }
    const newApartment = await apartmentService.addApartment({
      unitName,
      unitNumber,
      project,
      description,
      price
    });
    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating apartment', error });
  }
};
