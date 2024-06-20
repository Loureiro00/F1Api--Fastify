import fastify from "fastify";
import cors from "@fastify/cors";
import { teams } from "./models/teamsInterface";
import { drivers } from "./models/driversInterface";


const server = fastify({ logger: true });


server.register(cors, {
    origin: "*"
});
server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);

    const driversWithTeamNames = drivers.map(driver => {
        const team = teams.find(team => team.id === driver.teamId);
        return {
            
            id: driver.id,
            name: driver.name,
            team: team ? team.name : null,
            powerUnit: team ? team.PowerUnit : null
        };

        
    });

    return driversWithTeamNames;
});

interface DriverParams{
    id : string
}


server.get<{Params:DriverParams}>("/drivers/:id", async (request, response) => {
    
    const id = parseInt( request.params.id);
    const driver = drivers.find(driver => driver.id  === id);
 
    if (!driver) {
        response.type("application/json").code(404);
        return response.send({ error: "O corredor com id informado não foi encontrado" });
    } else {
        const team = teams.find(team => team.id === driver.teamId);
        const driverWithTeamInfo = {
            id: driver.id,
            name: driver.name,
            team: team ? team.name : null,
            powerUnit: team ? team.PowerUnit : null
    }
    response.type("application/json").code(200);
    return driverWithTeamInfo;
}

});


    server.listen({ port: 3333 }, () => {
        console.log("Server listening on port 3333")
    })

