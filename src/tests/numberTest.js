const request = require('supertest');
const app = require('../../app');

describe('POST /api/number-to-word', () => {
    it('should return a number passed in to words', async () => {
        const response = await request(app)
            .post('/api/number-to-word')
            .send({ number: 8 }) // Must be a number from 0 - 9 to get a success response
            .set('Accept', 'application/json');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ word: "eight" });
    });

    it('should return an error of status 400, because i pass an invalid number', async () => {
        const response = await request(app)
            .post('/api/number-to-word')
            .send({ number: 10 }) // Must be a number from 0 - 9 to get a success response
            .set('Accept', 'application/json');

        expect(response.statusCode).toBe(400);
    });
});

