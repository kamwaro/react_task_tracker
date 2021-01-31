
const Button = ({onAdd,btnState}) => {

    
   
    return (
        <div>
            <button style={{backgroundColor: btnState ? 'red' : 'green'}} className='btn' onDoubleClick={onAdd}>{btnState ? 'Close' : 'Open'}</button>
        </div>
    )
}

export default Button
