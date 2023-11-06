const data = require('../data/workouts.json');

/**
 * Returns all products.
 * @returns {Workout[]} An array of workouts
 */
function getAll() {
    return data.workouts;
}

/**
 * @param {number} id - The workout's ID.
 */

function get(id) {
    return data.workouts.find((workout) => workout.id === id);
}

function getByEmail(email) {
    return data.workouts.filter((workout) => workout.email === email);
}

function search(query) {
    return data.workouts.filter((workout) => {
      return (
        workout.userName.toLowerCase().includes(query.toLowerCase()) ||
        workout.workout.toLowerCase().includes(query.toLowerCase())
      );
    });
}

/**
 * 
 * @param {Workout} workout - The workout to see
 * @returns {Workout} The created workout
 */
function create(workout) {
    const newWorkout = {
        id: data.workouts.length + 1,
        ...workout,
    };
    data.workouts.push(newWorkout);
    return newWorkout;
}

function update(workout) {
    const index = data.workouts.findIndex((w) => w.id === workout.id);
    if(index === -1) {
        throw new Error('Workout not found');
    }
    data.workouts[index] = {
        ...data.workouts[index],
        ...workout,
    };
    return data.workouts[index];
}

/**
 * @param {number} id - The workout's ID.
 */
function remove(id) {
    const index = data.workouts.findIndex((w) => w.id === id);
    if(index === -1) {
        throw new Error('Workout not found');
    }
    data.workouts.splice(index, 1);
}

module.exports = {
    getAll,
    get,
    getByEmail,
    search,
    create,
    update,
    remove,
};