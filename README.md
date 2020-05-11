# ZOMBIE APOCALYPSE
This program calculates the Zombie movements on a grid (2d Array). Where few blocks are covered by Zombie and Humans, others are empty.


## Pre-requisites
Node is installed

## Start
```bash
#Install dependencies
npm install
#start the node server
npm start 
```

*Server start at Port 7000* 
- localhost:7000

**To call POST API**
Example using Postman below:
    URL - http://localhost:7000/call
    Body - {"n":"4","z":[2,1],"hmn":[[0,1],[1,2],[3,1]],"move":"DLUURR"}
    Header - "Content-Type": "application/json"

**After Call**
- Zombie: Marked as 1 on grid.
- Humans: Marked as 0 in grid.
- Rest are marked as -1, no occupancy.

## Description
The first *Zombie (1)* starts the Movement from the initial block, if any *Human (0)* is encountered it is converted to *1* and added to the **zombie** list/Array with its *coordinates*. 

Each one in **zombie** then completed the same set of Movements and above mentioned exercise is repeated.
Execution finishes after every Zombie in array has finished the movements.

## Result
The Results are send as one Object showing {score:*Num*,pos:*positions*}.
- Server side: *Postman response* **or** *Terminal*
- Client Side using *zombie.js*: http://localhost:7000 

# Improvisation Scope
- Form to be build on localhost/call to submit query rather a middleware tool as *Postman*
- Return results from API to Client side, rather using another JS (zombie.js)
- Removing all console.log, used for Showcase purposes and results.
- May improve a little on function flow/structure

