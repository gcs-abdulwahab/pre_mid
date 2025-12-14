import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.send('List of products');
});
router.post('/', (req, res) => {
    res.send('Create a new product');
});

export default router;