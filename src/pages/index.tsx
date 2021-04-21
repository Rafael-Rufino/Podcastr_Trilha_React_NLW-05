// forma de consumir uma api
//SPA - hook do react
/*
import {useEffect} from "react"

useEffect(() => {
      fetch('http://localhost:3333/episodes')
        .then(res => res.json())
        .then(data => console.log(data))
    
  },[])
*/

//SSR hooks do nextjs /executa toda vez que usuario acessar a pagina
/*

// quando for consumir API no nextjs Exporta a função getServerSideProps utilizando um funcao await
export async function getServerSideProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()


  return{
    props:{
      episodes: data,
    }
  }
} 
*/
//SSG -- so funciona em producao yarn build // funciona de forma static

export default function Home(props) {
 
  return (

    <div>

      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
    
    
  )
}

// 
export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()


  return{
    props:{
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
} 