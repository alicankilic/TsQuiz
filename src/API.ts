
export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD = "hard"
}


export const fetchQuizQuestions = async(amount:number,difficulty:Difficulty) => {
   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
   const fetching =  await fetch(endpoint);
   const data = await fetching.json(); 
   console.log(data);
}