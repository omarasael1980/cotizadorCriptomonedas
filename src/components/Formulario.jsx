import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
background: #9497FF;
border: none;
border-radius: 10px;
width: 100%;
height: 48px;
font-weight: 700;
color: #FFFFFF;
text-transform: uppercase;
font-size: larger;
padding: 10px;
transition: background-color .8s;
margin-top: 20px;
&:hover{
    background-color: #FFFFFF;
    color:black;
    cursor: pointer ;
}

`

const Formulario = ({setMonedas}) => {
        // UseState para ver como cambia criptos
        const [criptos, setCriptos] = useState([])
        //manejo de errores
        const [error,setError]=useState(false)

        //llamar customhook selectMonedas
          const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas)
         //llamar customhook selectMonedas
         const [criptomoneda, SelectCriptoMonedas] = useSelectMonedas("Elige tu criptomoneda", criptos)
      
        //CONSULTA DE API
    useEffect(() => {
        const consultarAPI = async () => {
                //url de la api a consultar
                const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
                //se espera la respuesta de la api
                 const respuesta = await fetch(url)
                 // se transforma en un JSON
                 const resultado = await respuesta.json()
                 console.log(resultado.Data)
                 //en base a los datos como son regresados se les da el formato recorriendo cada uno de los datos obtenidos
                 const arrayCriptos =resultado.Data.map((cripto)=>{
                   
                    //se construye objeto  id=name value=fullname   resultado  id=BTC value=Bitcoin
                    const objeto = {
                        id:cripto.CoinInfo.Name, 
                        nombre:cripto.CoinInfo.FullName
                    }
                    return (objeto)
                 })
                 setCriptos(arrayCriptos)
        }       
        consultarAPI()

    },[])
    const handleSubmit = (e)=>{
        e.preventDefault()
        //si uno de los dos arreglos esta vacio se niega el servicio
        if([moneda,criptomoneda].includes('')){
            
            setError(true)
            return
        }
        //si pasa validacion se quita error
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })

    }


  return (
    <>   
    {/* si hay error se muestra el mensaje */}
     {error && <Error>Todos los campos sin obligatorios</Error>}
    
    <form
        onSubmit={handleSubmit}
    >
        <SelectMonedas/>
       
        <SelectCriptoMonedas/>

       
        <InputSubmit 
            type="submit" 
            value="Cotizar"
        />
    </form>
    </>

  )
}

export default Formulario
