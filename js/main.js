let keep = true;

let bars = create_bars(50);

while(keep) {
    let index1 = randomNum(0, (bars.length - 1) / 2)
    let index2 = randomNum(0, (bars.length - 1) / 2)
    
    if(!grow_bar(bars[index1 + index2])) {
        break;
    }
}