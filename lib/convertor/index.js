const makeImageShort = image =>
	image == null
		? null
		: {
				...image
		  };

const makeImagesShort = images =>
	images.filter(el => el).map(makeImageShort);

const makeUserShort = user =>
	user == null
		? null
		: {
				id: user._id,
				email: user.email,
				name: user.name,
				avatar: makeImageShort(user.avatar)
		  };

const makeProductShort = product =>
	product == null
		? null
		: {
				id: product._id,
				name: product.name,
				description: product.description,
				images: makeImagesShort(product.images),
				types: product.types
		  };

const makeProductModel = product =>
	product == null
		? null
		: {
				descriptor: makeProductShort(product)
				// TODO @ipavlenko: Add stats and project details here
		  };

module.exports = {
	makeUserShort,
	makeProductShort,
	makeProductModel
};
