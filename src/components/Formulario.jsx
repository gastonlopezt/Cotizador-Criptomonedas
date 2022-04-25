import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from './Hooks/useSelectMonedas';
import {monedas} from '../data/monedas'



const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;

  }
`;


const Formulario = () => {



  const [SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)


  return (
    <form>
      <SelectMonedas value="seleccione"/>

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
}

export default Formulario
