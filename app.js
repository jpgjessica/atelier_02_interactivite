class Boutique {
    constructor(name, address, type, articles, totalCash) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.articles = articles;
        this.totalCash = totalCash;
    }
    sell(articleX, price) {
        if (this.articles.indexOf(articleX) != -1) {
            this.totalCash += price;
        };
    }
    refund(nameStore, value) {
        if (nameStore === this.name && value <= this.totalCash) {
            return true;
        }
        return false;
    }

    toHtml() {
        const div = document.createElement('div');
        div.classList.add('newStores_container' + this.name);

        const nameHtml = document.createElement('p');
        const addressHtml = document.createElement('p');
        const typeHtml = document.createElement('p');
        const articlesHtml = document.createElement('p');
        const totalCashHtml = document.createElement('p');

        nameHtml.textContent = 'Name: ' + this.name;
        addressHtml.textContent = 'Adress: ' + this.address;
        typeHtml.textContent = 'Type: ' + this.type;
        articlesHtml.textContent = 'Articles: ' + this.articles.join(', ');
        totalCashHtml.textContent = 'totalCash: ' + this.totalCash;

        div.appendChild(nameHtml);
        div.appendChild(addressHtml);
        div.appendChild(typeHtml);
        div.appendChild(articlesHtml);
        div.appendChild(totalCashHtml);

        document.body.appendChild(div);
    }
}

const boutique = new Boutique('Or', '888, Ville de Québec', 'Bijoux', ['boucle', 'bague', 'coullier', 'bracelet', 'charm'], 450);
boutique.sell('bague', 50);
console.log(boutique.totalCash);

let isPossible = boutique.refund('Or', 200);
console.log(isPossible);

boutique.toHtml();

const newStores = [
    new Boutique('Reno', '123, Ville de Lévis', 'Construction', ['marteau', 'platre', 'pinceau', 'peiture', 'bois'], 2600),
    new Boutique('Or', '888, Ville de Québec', 'Bijoux', ['boucle', 'bague', 'coullier', 'bracelet', 'charm'], 450),
    new Boutique('Toyota', '321, Ville de Québec', 'Voitures', ['Highlander', 'Corola', 'Yaris'], 68000),
]

newStores.forEach(boutique => {
    boutique.toHtml();
});

const filtered = newStores.find((boutique) => boutique.type == 'Voitures');
console.log(filtered);


if (filtered) {
    document.querySelector('.newStores_container' + filtered.name).style.backgroundColor = 'purple';
}
