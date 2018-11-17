const keystone = require("keystone");
const { makeProductShort, makeProductModel } = requireRoot("./lib/convertor");
const { productShortProjection, productModelProjection } = requireRoot(
	"lib/projections"
);

const Product = keystone.list("Product").model;

class ProductsService {
	async loadProductsList(selector) {
		const products = await Product.find(selector)
			.populate(productShortProjection)
			.exec();
		return products.map(makeProductShort);
	}

	// async loadProjectDetails(selector) {
	// 	const products = await Product.findOne(selector)
	// 		.populate(productModelProjection)
	// 		.exec();
	// 	return makeProductModel(products);
	// }
}

module.exports = ProductsService;
