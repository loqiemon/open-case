

export default function getRandomNumber(min: number, max: number) : number {
    const random = Math.random();
    const randomNumber = min + random * (max - min);
    return randomNumber;
  }
  