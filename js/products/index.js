import {ProductCatalogComponent} from "../productCatalog";
import {BaseComponent} from "../components/common/baseComponent";
import {ProductService} from "../services/productService";
import {ProductDetails} from "../productDetails";

console.log(ProductService.getAll());

export class ProductsPageComponent extends BaseComponent {

    constructor(element) {
        super({element});
        this._render();
        this._catalog = new ProductCatalogComponent({
            element: document.querySelector('.products-catalog'),
            products: ProductService.getAll(),
            onProductSelected: (productId)=> {
                console.log(productId);
                this._catalog.hide();
                this._productsDetails.show();
            }
        });
        this._productsDetails = new ProductDetails({
            element: this._element.element.querySelector('.products-details')
        })
    };

    _render() {
        console.log(this._element);

        this._element.element.innerHTML = `<div class="container-fluid">
            <div class="row">
                <div class="container">
                    <div class="products-catalog">
                    
                    </div>
                    <div class="products-details">
                    
                    </div>
                </div>
            </div>
        </div>`
    }

}