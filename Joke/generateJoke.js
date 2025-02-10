async function generateJoke(){
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const jsonData = response.json();
    console.log(response);
}