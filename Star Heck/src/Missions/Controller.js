import { AllConditionals, AllItems, AllLocations, AllPeople, AllVehicles } from "../Places";

export const setCurrentMission = (mission, gameContext) =>
{
    debugger
    addToArray(gameContext.allLocations, mission.allLocations);
    addToArray(gameContext.allPeople, mission.allPeople);
    addToArray(gameContext.allConditionals, mission.allConditionals);
    addToArray(gameContext.allItems, mission.allItems);
    addToArray(gameContext.allVehicles, mission.allVehicles);
};

export const addToArray = (arrayOne, arrayTwo) =>
{
    for(let i = 0; i < arrayTwo.length; i++)
    {
        arrayOne.push(arrayTwo[i]);
    }
}

export const removeCurrentMission = (gameContext) =>
{
    let mission = gameContext.mission;
    gameContext.allLocations = gameContext.allLocations.filter((x) => !mission.allLocations.includes(x));
    gameContext.allPeople = gameContext.allPeople.filter((x) => !mission.allPeople.includes(x));
    gameContext.allConditionals = gameContext.allConditionals.filter((x) => !mission.allConditionals.includes(x));
    gameContext.allItems = gameContext.allItems.filter((x) => !mission.allItems.includes(x));
    gameContext.allVehicles = gameContext.allVehicles.filter((x) => !mission.allVehicles.includes(x));
};