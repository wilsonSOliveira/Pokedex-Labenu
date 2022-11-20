import styled from "styled-components"
import backpokes from "../../img/back-pokes.jpg"

export const Tela = styled.section`
width: 100%;
height: 100%;
position: absolute;
background-color: #00000082;
top: 0;
`
export const Card = styled.section`
height: 80vh;
width: 600px;
display: grid;
grid-template-rows: 5fr 1fr;
border-radius: 12px;
position: fixed;
background-color: #fff;
top: calc(50% - 200px);
left: calc(50% - 225.5px);
justify-content: center;
z-index: 999999;
justify-items: center;
h2{
  margin-top: 10px;
}
`
export const FrontPokemon=styled.img`
    width: 150px;
    background: #00000034;
    border-radius: 6px;
    background-image:url(${backpokes});
    background-size: cover;
    background-blend-mode: darken;
    margin-top: 10px;
    
    
`
export const NomePokemonDuelo = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  `

export const Pokemons = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  justify-items: center;
`
