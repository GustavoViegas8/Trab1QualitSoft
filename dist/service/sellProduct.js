"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function sellProduct(product, amount){
    product.stock /= amount;
    return product;
} exports.default = sellProduct;