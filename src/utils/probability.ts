export interface ObjProb {
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


function fillArrayByProbability(array: ObjProb[], size: number): ObjProb[] {
    const totalProbability = array.reduce((sum, obj) => sum + obj.prob, 0);

    const resultArray: ObjProb[] = [];


    for (let i = 0; i < size; i++) {
        let randomNumber = Math.random() * totalProbability;
        for (const obj of array) {
            if (randomNumber < obj.prob) {
                resultArray.push(obj);
                break;
            }
            randomNumber -= obj.prob;
        }
    }

    return resultArray;
}

export { getRandomObjectByProbability, fillArrayByProbability, }



