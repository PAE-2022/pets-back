const PetModel = require('../models/Pet');
const { HttpError } = require('../utils/errors');

class PetController {
    constructor() { }

    async getAllPets() {
        const pets = await PetModel.find({});
        return pets;
    }

    async getPetById(petId) {
        const pet = await PetModel.find({ _id: petId });
        if (!pet) {
            throw new HttpError(404, 'Pet not found');
        }
        return pet;
    }

    async createPet(petInfo) {
        const pet = new PetModel({
            ...petInfo,
        });

        if (!pet) {
            throw new HttpError(500, {message: 'Could not create pet'});
        }

        const newPet = await pet.save();
        return newPet;
    }

    async updatePet(petId, petInfo) {
        const pet = await PetModel.findByIdAndUpdate(petId, petInfo);
        if (!pet) {
            throw new HttpError(404, {message: 'Pet not found'});
        }
        return pet;
    }

    async deletePet(petId) {
        const pet = await PetModel.findByIdAndDelete(petId);
        if (!pet) {
            throw new HttpError(404, {message: 'Pet not found'});
        }
        return pet;
    }
}

module.exports = PetController;