import './App.css'
import { Button, MyLabel } from 'fn-custom-components'

function App() {

  return (
      <div className="card">
        <MyLabel label={'Hola Mundo'} allCaps color='text-secondary'/>

        <Button label={'Boton'} backgroundColor='#fafafa' onClick={() => console.log('Le di Click')}/>
      </div>
  )
}

export default App
