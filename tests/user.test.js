const request = require('supertest');
const app = require('../src/config/server'); // Adjust the path as necessary
const User = require('../src/models/userModel');

describe('User Registration and Login', () => {
    afterAll(async () => {
        await User.deleteMany({});
    });

    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
        
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User registered successfully');
    });

    it('should login the user', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({ email: 'test@example.com', password: 'password123' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});