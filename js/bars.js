function create_bars(limit_bars) {
    /* 
        create_bars(limit_bars: Number): HTMLDivElement[]
        limit_bars -> representa a quandidade de barras criadas (valor inteiro)

        retorna elementos criados
    */
   
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
    // render_bar(bar: HTMLDivElement[]): void
    // bar -> array com elementos a serem renderizados

    let mainContainer = document.querySelector("#main-container");
    mainContainer.appendChild(bar);
}

function grow_bar(bar, increment) {
    // grow_bar(bar: HTMLDivElement[], increment: Number): Boolean
    // bar -> array com elementos a terem suas alturas incrementadas
    // increment -> regra de incremento das barras
    // 
    // incrementa altura em determinada barra
    // retorna true se a nova altura da barra possuir menos de 540px

    let height = bar.offsetHeight;
    
    if (height < 540) {
        bar.style.height = height + increment + "px";
        console.log(height + " " + increment + "px");
        return true;
    }
    return false;
}

function clearBars() {
    // clearBars(): void
    // 
    // limpa barras existentes

    content = document.querySelector("#main-container");
    content.innerHTML = "";
}

function build_graph(amountBars, randomIndex, increment) {
    // build_graph(amountBars: Number, randomIndex: Number, increment: Number): void
    // amountBars -> quantidade de barras a serem geradas
    // randomIndex -> quantidade de index randomicos a serem gerados
    // increment -> incremento da altura das barras 

    clearBars();

    let keep = true;

    bars = create_bars(amountBars);

    while(keep) {
        let index = generateIndex(randomIndex, bars);
        console.log(index);
        if(!grow_bar(bars[index], increment)) {
            break;
        }
    }
}