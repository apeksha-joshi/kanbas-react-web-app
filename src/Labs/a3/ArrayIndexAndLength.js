function ArrayIndexAndLength(){
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return(
        <>
            <h3>Array index and length</h3>
            <p>length1 = {length1}</p>
            <p>index1 = {index1}</p>
        </>
    );
}

export default ArrayIndexAndLength;