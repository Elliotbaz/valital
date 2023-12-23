const request = require('supertest');
const app = require('../../app');

describe('GET /api/get-word/:word', () => {
    it('should return an example usage if the word is a verb', async () => {
        const response = await request(app).get('/api/get-word/Dance'); // 'Dance' is a verb
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('example');
    });

    it('should return a definition if the word is not a verb or has no verb example', async () => {
        const response = await request(app).get('/api/get-word/apple'); // 'apple' is not a verb
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('definition');
    });
});

