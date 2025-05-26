
function Button(){

    const handleClick = () => {
        alert("You clicked me");
    }


    return(
        <button onClick={handleClick}>Click me smile</button>
    );
}

export default Button