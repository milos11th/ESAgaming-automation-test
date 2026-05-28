# API Testing - Postman + Newman

## Test Case

Create Product via API

## Tool

Postman + Newman

## How to run tests

1. Install Newman:
   npm install -g newman

2. Run collection:
   newman run "collection.json"

## Notes

API returns 500 error instead of 201 Created, which is logged as a potential backend issue.
