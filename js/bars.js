function create_bars(limit_bars) {
    // Cria e retorna bars 

    let bars = [];
    for (let i = 0; i <= limit_bars; i++) {

        let bar = document.createElement("div");
        bar.classList.add("bar");

        bars.push(bar)
        render_bar(bar)
    }

    return bars;
}

function render_bar(bar) {
    // Renderiza bar
    let mainContainer = document.querySelector("#main-container");
    mainContainer.appendChild(bar);
}

function grow_bar(bar) {
    // console.log(bar)
    let height = bar.offsetHeight;

    if (height < 540) {
        bar.style.height = height + 10 + "px";
        return true;
    }
    return false;
}

function randomNum(min, max) {
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function clearBars() {
    content = document.querySelector("#main-container");
    content.innerHTML = "";
}

function sum(array) {
    let acumulator = 0

    for (let i = 0; i < array.length; i++) {
        acumulator += array[i];
    }

    return acumulator;
}

function generateIndex(amount, bars) {
    let amountBars = bars.length - 1
    let indexs = []
    
    for (let i = 0; i < amount; i++) {
        indexs.push(randomNum(0, amountBars / amount));
    }

    console.log(indexs);

    return sum(indexs);
}

function build_graph(amountBars, randomIndex, increment) {

    clearBars();

    let keep = true;

    bars = create_bars(amountBars);

    while(keep) {
        let index = generateIndex(randomIndex, bars);
        console.log(index);
        if(!grow_bar(bars[index])) {
            break;
        }
    }
}