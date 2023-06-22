import React from 'react'

async function fetchAllMovies() {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c10199a155mshe4367d92da80e55p1b18d9jsn57f0b21820d3',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.text()
    return result
  } catch (error) {
    console.error(error)
  }
}

export default function Home() {
  // const response = await fetchAllMovies()

  return (
    <section>
      <h1>Home</h1>
      {/* <p>{response}</p> */}
    </section>
  )
}
