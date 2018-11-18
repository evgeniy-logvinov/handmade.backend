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
	logoImage: {
		type: Types.CloudinaryImage,
		folder: "handmade.backend/products",
		autoCleanup: true,
		initial: true,
	},
	images: {
		type: Types.CloudinaryImages,
		folder: "handmade.backend/products",
		autoCleanup: true,
		initial: true,
		generateFilename: function(file, attemptNumber, callback) {
			var originalname = file.originalname;
			var filenameWithoutExtension = originalname.substring(
				0,
				originalname.lastIndexOf(".")
			);
			var timestamp = new Date().getTime();
			return `${filenameWithoutExtension}-${timestamp}`;
		},
		whenExists: "retry"
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
