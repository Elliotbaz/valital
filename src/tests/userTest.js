const request = require('supertest');
const app = require('../../app');

describe('GET /api/who-made-me', () => {
    it('should return a string information about the creator of this application', async () => {
        const response = await request(app)
            .get('/api/who-made-me')

        expect(response.statusCode).toBe(200);
    })
})