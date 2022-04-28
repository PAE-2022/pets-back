const {Schema, model} = require('mongoose');

// Declare pet model
const PetSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    breeds: {
        type: Object,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    coat: {
        type: String,
        required: true,
    },
    attributes: {
        type: Object,
        required: true,
    },
    environment: {
        type: Object,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photos: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    status_changed_at: {
        type: Date,
        required: true,
    },
    published_at: {
        type: Date,
        required: true,
    },
    contact: {
        type: Array,
        required: true,
    },
});

const PetModel = model('pets', PetSchema);

module.exports = PetModel;