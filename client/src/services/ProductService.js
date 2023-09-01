import Api from '@/services/Api'
export default {
    index() {
        return Api().get('products')
    },
    show(productId) {
        return Api().get('product/' + productId)
    },
    post(product) {
        return Api().post('product', product)
    },
    put(product) {
        return Api().put('product/' + product.id, product)
    },
    delete(product) {
        return Api().delete('product/' + product.id, product)
    },
}