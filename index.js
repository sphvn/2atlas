const filter = (f, x) => x.filter(f);
const map = (f, x) => x.map(f);

const Str = {
    join: (x, y) => y.join(x)
}

const twoatlas = (i) => Str.join(",", map(x => `i:${x}`, filter(x => x != 0, Object.values(i))));

const importElem = document.querySelector("#import");
const exportElem = document.querySelector("#export");
const submitElem = document.querySelector("#submit");

const runIt = function() {
  const selectedItems = JSON.parse(importElem.value).selectedItems;
  exportElem.value = JSON.stringify(twoatlas(selectedItems));
};


submitElem.onclick = runIt;