function ImpliedReturn(){
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return(
        <>
            <h1>Implied return</h1>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4, 5) = {multiply(4, 5)}<br />
        </>
    );
}

export default ImpliedReturn;