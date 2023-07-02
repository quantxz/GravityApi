import request from 'supertest'
import app from "../../app";

describe('Sample test', () => {
    it('should test that true === true', async () => {
        const res =  await request(app).get('/books/1')

        console.log(res.body)
        expect(res.body).toHaveProperty('name')
    })
})