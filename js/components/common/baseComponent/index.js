
export class BaseComponent {
    constructor({element}) {
        this._element = element
    }

    show() {
        this._element.element.hidden = false
    }

    hide() {
        this._element.element.hidden = true
    }
}