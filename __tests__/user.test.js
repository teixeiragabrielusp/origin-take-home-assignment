const supertest = require('supertest');
const app = require('../src/app');

test('Should create a new user insurance', async () => {
    const response = await supertest(app)
        .post('/user')
        .send({
            age: 35,
            dependents: 2,
            house: {ownership_status: "owned"},
            income: 0,
            marital_status: "married",
            risk_questions: [0, 1, 0],
            vehicle: {year: 2018}
          })
        .expect(201);

    //Assertations about the response
    expect(response.body).toMatchObject({
            "auto": "regular",
            "disability": "ineligible",
            "home": "economic",
            "life": "regular"
        }
    );
});

test('Should return a validation error', async () => {
    const response = await supertest(app)
        .post('/user')
        .send({
            age: 35,
            dependents: 2,
            house: {ownership_status: "owned"},
            income: 0,
            risk_questions: [0, 1, 0],
            vehicle: {year: 2018}
          })
        .expect(400);

    // //Assertations about the response
    expect(response.body.details[0].message).toMatch(
        "\"marital_status\" is required" 
    );
});