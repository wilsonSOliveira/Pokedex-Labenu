import { CardStyle, Left, Number, Name, Details, Type, Back, Pokemon, Right, TypeInside, TypeName, Capturar } from './StyleCard';
import { getType } from '../../../../hooks/getColors';
import back from '../../img/back.svg'
import { useNavigate } from "react-router-dom";
import { goToDetails } from '../../../../Routes/Coordinator'

export function Card(props) {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navigate = useNavigate()  
  const {cardColor} = getType(props.pokemon?.types[0].type.name)
  
  const types = props.pokemon.types?.map((type, i) => {
    const {color, symbol} = getType(type.type.name)
    return <TypeInside key={i} style={{backgroundColor: color}}> <img src={symbol} alt="" /> <TypeName>{capitalizeFirstLetter(type.type.name)}</TypeName> </TypeInside>
})

  return (
    <CardStyle style={{backgroundColor: cardColor}} >
      <Left>
        <Number>#{props.pokemon?.id < 10 ? "0" + props.pokemon.id : props.pokemon.id}</Number>
        <Name>{capitalizeFirstLetter(props.pokemon.name)}</Name>
        <Type>
          {types}
        </Type>
      </Left>
      <Right>
        <Capturar onClick={(()=> props.addPokemon(props.pokemon))}>Capturar!</Capturar>
        <Back src={back} alt="" />
        <Pokemon src={props.pokemon.sprites.other["official-artwork"].front_default} />
      </Right>
    </CardStyle>
  )
}