import styled from "@emotion/styled"

const Contenedor = styled.div`
color :#ffff;
font-family:'Lato', sans-serif;
display:flex;
align-items: center;
gap:1rem;
margin-top: 30px;

`
const Imagen = styled.img`
width: 100px;
display: block;

`
const Texto = styled.p`
font-size: 18px;
span{
    font-weight: 700;
}
`

const  Precio = styled.p`
font-size: 24px;
span{
    font-weight: 700;
}
`
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY,LOWDAY,LASTUPDATE, IMAGEURL} = resultado
  return (
        <Contenedor>
            <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="Imagen Criptomoneda"/>

            <div>   
                <Precio>EL tipo de cambio es:<span> {PRICE}</span></Precio>
                <Texto>EL valor más alto del día es de:<span> {PRICE}</span></Texto>
                <Texto>El valor más bajo del día es de: <span>{PRICE}</span></Texto>
                <Texto>La última actualización es: <span>{PRICE}</span></Texto>
            </div>
    </Contenedor> 

  )
}

export default Resultado
