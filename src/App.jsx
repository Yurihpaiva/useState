import { useState } from "react"
import Button from "./components/Button"

function App() {
 
 const [buttonColor, setbuttonColor] = useState ('pink')
 const [buttonSize, setbuttonSize] = useState ('sm')
   return (
  <>
  <Button handleClick={() => {setbuttonColor('pink')}} size='sm' color='pink' value='Botão Rosa' />
  <Button handleClick={() => { setbuttonColor('orange')}} size='md' color='orange' value='Botão Laranja' />
  
  <Button handleClick={() => { setbuttonSize('sm')}} size='md' color='pink' value='Botão Pequeno' />

  <Button handleClick={() => { setbuttonSize('md')}} size='md' color='orange' value='Botão Médio' />


  <Button size={buttonSize} color={buttonColor} value='Botão Personalizado' />


 </>
 )

}
export default App
