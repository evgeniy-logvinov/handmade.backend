var keystone = require("keystone");
var Types = keystone.Field.Types;

/**
 * Product Model
 * =============
 */

var Product = new keystone.List("Product", {
	map: { name: "name" },
	autokey: { path: "slug", from: "name", unique: true },
	sortable: true
});

Product.add({
	name: { type: String, required: true, initial: true },
	description: { type: String, required: false, initial: true },
	createdAt: { type: Date, default: Date.now },
	images: {
		type: Types.CloudinaryImages,
		folder: "handmade.backend/products",
		autoCleanup: true,
		initial: true
	},
	types: {
		type: Types.Relationship,
		ref: "ProductType",
		many: true,
		initial: true,
		required: true
	}
});

Product.defaultSort = "-createdAt";
Product.defaultColumns = "name, info, publishedDate, types, images";
Product.register();
