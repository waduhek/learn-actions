import express from 'express';

import greet from '#/controllers/greeting.controller';

const router = express.Router();

router.get('/', greet);

export default router;
