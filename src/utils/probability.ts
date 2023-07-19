interface ObjProb {
    prob: number;

}
  
function getRandomObjectByProbability(objectsArray: ObjProb[]): ObjProb | null {

    const totalProbability = objectsArray.reduce((sum, obj) => sum + obj.prob, 0);
    const randomNum = Math.random() * totalProbability;

    let currentProbability = 0;
    for (const obj of objectsArray) {
        currentProbability += obj.prob;
        if (randomNum <= currentProbability) {
        return obj;
        }
    }

    return null;
}



