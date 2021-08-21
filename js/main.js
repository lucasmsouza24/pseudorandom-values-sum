function btnBuildGraph() {
    let  bars = Number(inputBars.value);
    let  randomIndex = Number(inputRandomIndex.value);
    let  increment = Number(inputIncrement.value);

    build_graph(bars, randomIndex, increment);
}