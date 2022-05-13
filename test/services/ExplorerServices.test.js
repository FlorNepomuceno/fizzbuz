const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    })
    test("Requerimiento 2: Calcular la cantidad los explorers en una mision", () => {
        const explorers = [{mission: "node"}, {mission:"node"}];
        const explorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersByMission).toBe(2)
    })
    test("Requerimiento 3: Obtener Usernames de los explorers", () => {
        const explorers = [{mission: "node", githubUsername: "Flor"}, {mission:"node", githubUsername: "Esthela"}];
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode[0]).toBe("Flor");
    })
    
})