class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;

    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const usernamesInNode = explorersByMission.map((explorers) => explorers.githubUsername);
        return usernamesInNode;
    }

}

module.exports = ExplorerService;