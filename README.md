# Origin Backend Take-Home Assignment
Installing dependencies: npm install
Running application: npm run dev
Running tests: npm test

After start the application you will need to do a HTTP - POST request to http://localhost:3000/user with the desired input. Then the API will do the calculations and return an JSON output.

## The input
At the body you will need to input the following attributes. Example - 1:

```JSON
{
  "age": 60,
  "dependents": 2,
  "house": {"ownership_status": "owned"},
  "income": 150000,
  "marital_status": "married",
  "risk_questions": [0, 1, 1],
  "vehicle": {"year": 2015}
}
```

Example - 2:

```JSON
{
  "age": 26,
  "dependents": 0,
  "house": 0,
  "income": 0,
  "marital_status": "married",
  "risk_questions": [1, 0, 0],
  "vehicle": 0
}
```


## The output
Considering the data provided above at example 1, the application will return the following JSON payload:

```JSON
{
    "auto": "responsible",
    "disability": "regular",
    "home": "regular",
    "life": "responsible"
}
```

Considering the data provided above at example 2, the application will return the following JSON payload:

```JSON
{
    "auto": "ineligible",
    "disability": "ineligible",
    "home": "ineligible",
    "life": "economic"
}
```