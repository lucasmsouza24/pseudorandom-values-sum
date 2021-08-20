let keep = true;

let bars = create_bars(90);

while(keep) {
    // let index = randomNum(0, bars.length - 1)
    let index1 = randomNum(0, (bars.length - 1))
    
    if(!grow_bar(bars[index1])) {
        break;
    }
}