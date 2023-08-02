import { AllConditionals, AllItems, AllLocations, AllPeople, AllVehicles } from "../Places";

export const setCurrentMission = (mission, gameContext) =>
{
    addToArray(gameContext.allLocations, mission.allLocations);
    addToArray(gameContext.allPeople, mission.allPeople);
    addToArray(gameContext.allConditionals, mission.allConditionals);
    addToArray(gameContext.allItems, mission.allItems);
    addToArray(gameContext.allVehicles, mission.allVehicles);

    for(let i = 0; i < gameContext.allPeople.length; i++)
    {
        let person = gameContext.allPeople[i];
        for(let y = 0; y < mission.allConversations.length; y++)
        {
            let conversation = mission.allConversations[y];
            if(person.name == conversation.person)
            {
                person.conversations.push({question: conversation.question, answer: conversation.answer, action: conversation.action, missionAdded: true});
            }
        }
    }
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

    for(let i = 0; i < gameContext.allPeople; i++)
    {
        let person = gameContext.allPeople[i];
        person.conversations = person.conversations.filter(x => !x.missionAdded);
    }
};