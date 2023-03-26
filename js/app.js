const getJoke = async () => {
  try {
    const response = await axios.get('https://icanhazdadjoke.com', {
      headers: {
        Accept: "application/json"
      }
    });
    console.log(response);
    const joke = response.data.joke;
    console.log(joke);
  } catch (error) {
    console.log(error);
  }
}

const displayJoke = async () => {
  const jokeText = await getJoke();
}

getJoke();
