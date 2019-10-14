import {BaseComponent} from "../components/common/baseComponent";

export class ProductDetails extends BaseComponent{

    constructor({element}){
        super({element});
        this._render();
    }

    show(product) {
        this._product = product;
        this._render();
        super.show();
    }

    _render() {
        this._element.innerHTML = `
       
        <div class="mt-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8OTv1b9Cs9s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        
        `
    }
}