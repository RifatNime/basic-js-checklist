// fibonacci series লিখ যা কোন wrong iput দিলে alert করবে


let fiboLimit = prompt("type the limit");
getFiboSeries(fiboLimit);
function getFiboSeries(limit) {
    if (typeof limit != numbers && limit < 2) {
        return 'plz give input a number type data and must be above 2';
    }
    let fiboSeries = [0, 1];
    for (let i = 2; i < limit; i++) {
        fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
    }
    return fiboSeries;
}
let theSeries = getFiboSeries(fiboLimit);
console.log(theSeries);

