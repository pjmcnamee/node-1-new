const products = require('../products.json')

const getProduct = (req,res) => {
	const {id} = req.params
	const product = products.filter(item => item.id == id)
	if(!product) {
		return res.status(500).send('Item is not in list')
	}
	res.status(200).send(product)
}


module.exports = getProduct