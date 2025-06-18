function Random () {

    let number= Math.random() * 100;
    return <h2 style={{backgroundColor: '#2819'}}>Random Number Is == {Math.round(number)}</h2>;

}

export default Random;