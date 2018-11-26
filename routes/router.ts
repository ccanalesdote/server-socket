import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', ( req: Request, res: Response) => {
	res.json({
		ok: true,
		message: 'All Alright!'
	});
});

router.post('/mensajes', ( req: Request, res: Response) => {

	const name = req.body.name;
	const lastname = req.body.lastname;

	res.json({
		ok: true,
		name,
		lastname
	});
});

router.post('/mensajes/:id', ( req: Request, res: Response) => {

	const name 		= req.body.name;
	const lastname 	= req.body.lastname;
	const id 		= req.params.id;

	res.json({
		ok: true,
		id,
		name,
		lastname
	});
});

export default router;