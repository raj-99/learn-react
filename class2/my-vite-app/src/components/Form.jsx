const Button = () =>{
    const handleClick = () => {
        console.log("Button Clicked")
    }
    return (
        <button onClick={handleClick}></button>
    )
}

export default Button