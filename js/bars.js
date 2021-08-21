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