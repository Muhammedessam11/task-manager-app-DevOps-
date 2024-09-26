const request = require('supertest');
const app = require('../app');
const db = require('../config/db');

// Before all tests, sync the database
beforeAll(async () => {
    await db.sync();
});

// Test for fetching all tasks
describe('GET /tasks', () => {
    it('should return an empty array if no tasks exist', async () => {
        const response = await request(app).get('/tasks');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });
});

// Test for creating a new task
describe('POST /tasks', () => {
    it('should create a new task', async () => {
        const newTask = { title: 'Test Task' };
        const response = await request(app).post('/tasks').send(newTask);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(newTask.title);
    });
});

