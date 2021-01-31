import Button from './Button'

const Header = ({onAdd, btnState}) => {
  
 

  
    return (
       <header className='header'>
           <h1 >Task Tracker </h1>
           <Button onAdd={onAdd} btnState={btnState}/>
           
       </header>
    )
}



export default Header
