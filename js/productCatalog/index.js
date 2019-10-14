import {BaseComponent} from "../components/common/baseComponent";
import {ProductService} from "../services/productService";
console.log(ProductService.getAll());

export class ProductCatalogComponent extends BaseComponent {

    constructor(element, products, onProductSelected) {
        super({element});
        this._products = element.products;
        this._onProductSelected = element.onProductSelected;
        this._render();
        this._element.element.addEventListener('click', (event)=>{
            const parentItem = event.target.closest('.product-card');

            console.log(parentItem);

            if (!parentItem) {
                return
            }

            this._onProductSelected(parentItem.dataset.productId);
        });

        console.log(this);
    }

    _render() {
        this._element.element.innerHTML = `
            <div class="row">
            
            ${this._products.map((product) => `
                            <div class="col-sm">
                    <article class="product-card" data-product-id="${product.id}">
                        <div class="product-card__image">
                            <img src="${product.image}" alt="">
                        </div>
                        <header class="product-card__information">
                            <div class="product-card__date">${product.type}</div>
                            <h3 class="product-card__title"><a href="product.link">${product.type}</a></h3>
                            <div class="product-card__date">${product.type}</div>
                        </header>
                    </article>
                </div>
            `)}
            
            </div>

        `
    }
    
}