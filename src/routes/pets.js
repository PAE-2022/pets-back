const petsRouter = require('express').Router();
const PetController = require('../controllers/pet.controller');
const {handleError} = require('../utils/hof');

/**
 * Get all pets
 */
petsRouter.get('/', handleError(async (req, res) => {
    const controller = new PetController();
    const pets = await controller.getAllPets();
    res.status(200).json(pets);
}));

/**
 * Get pet by id
 */
petsRouter.get('/:id', handleError(async (req, res) => {
    const controller = new PetController();
    const pet = await controller.getPetById(req.params.id);
    if (!pet) {
        res.status(404).send({
            message: 'Pet not found',
        });
        return;
    }
    res.status(200).json(pet);
}));

/**
 * Create a new pet
 */
petsRouter.post('/', handleError(async (req, res) => {
    // TODO validation
    const controller = new PetController();
    const pet = await controller.createPet(req.body);
    res.status(201).json(pet);
}));

/**
 * Delete pet by id
 */
petsRouter.delete('/:id', handleError(async (req, res) => {
    const controller = new PetController();
    const pet = await controller.deletePet(req.params.id);
    if (!pet) {
        res.status(404).send({
            message: 'Pet not found',
        });
        return;
    }
    res.status(200).json(pet);
}));

/**
 * 
 */
petsRouter.patch('/:id', handleError(async (req, res) => {
    // TODO validation
    const controller = new PetController();
    const pet = await controller.updatePet(req.params.id, req.body);
    if (!pet) {
        res.status(404).send({
            message: 'Pet not found',
        });
        return;
    }
    res.status(200).json(pet);
}));

module.exports = petsRouter;