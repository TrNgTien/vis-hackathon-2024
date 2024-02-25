import { userServiceInstance } from '@/services';

const router = require('express').Router();


router.get('/', userServiceInstance.getUsers);

// router.delete('/:id', userServiceInstance.isExisted);
//
// router.put('/:id', userServiceInstance.isExisted);

export default router;
