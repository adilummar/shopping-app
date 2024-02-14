const express = require("express")
const {getAllProducts,creteProducts,updateProduct,deleteProduct} = require("../controllers/productController")
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(creteProducts)
router.route("/products/:id").put(updateProduct).delete(deleteProduct)


module.exports = router;