import { postServiceInstance } from '@/services';
const router = require('express').Router();

router.get('/', postServiceInstance.getPosts);

router.get('/:id', postServiceInstance.getPostById);

// router.post('/', postServiceInstance.isExisted);

// router.delete('/:id', postServiceInstance.isExisted);
//
// router.put('/:id', postServiceInstance.isExisted);

export default router;
