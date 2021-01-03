import mongo from './setup/mongo';

mongo.connect(async db => {
	const productsCount = await db.collection('products').countDocuments({});

	if (productsCount > 0) {
		await db.collection('products').drop();
	}

	const usersCount = await db.collection('users').countDocuments({});

	if (usersCount > 0) {
		await db.collection('users').drop();
	}

	await db.collection('products').insertMany([
		{
			title: 'Mix de sushi e caviar',
			description: 'Mix de sushi e caviar',
			image: {
				id: '368d575c-f0ed-11e9-a713-2a2ae2dbcce4',
				filename: 'sushi_3_1000x1600_yfdxvp_f25npp.jpg'
			},
			price: '99.99'
		},
		{
			title: 'Mix de 23 sushi',
			description: 'Mix de 23 sushi',
			image: {
				id: '56945ecc-f0ef-11e9-81b4-2a2ae2dbcce4',
				filename: 'sushi_o8gcsm_fxgdij.jpg'
			},
			price: '25.00'
		},
		{
			title: 'Pizza de pepperoni com tomate',
			description: 'Pizza de pepperoni com tomate e manjericão',
			image: {
				id: '4bb3a936-f0ef-11e9-81b4-2a2ae2dbcce4',
				filename: 'pizza_2_duoq0f_zahy7o.jpg'
			},
			price: '35.00'
		},
		{
			title: 'Kit Baguettes & Wraps Veganos',
			description:
				"Kit para festas de Baguettes & Wraps Veganos",
			image: {
				id: '6951ab9a-f0f0-11e9-81b4-2a2ae2dbcce4',
				filename: 'veganSandwitchPlatter_Hero.jpg'
			},
			price: '49.99'
		},
		{
			title: 'Big Mac',
			description:
				'Dous hamburgeres, alface, queijo, molho especial, cebola, pickles em um pão com gergelim',
			image: {
				id: '3c64aeed-dc9e-4665-b975-88edd2bf66e3',
				filename: 'beef_hamburger.jpg'
			},
			price: '35.00'
		},
		{
			title: 'Hamburger de Frango',
			description: 'Hamburger de Frango.',
			image: {
				id: '4bbd0210-f18a-11e9-81b4-2a2ae2dbcce4',
				filename: 'chicken_hamburger.jpg'
			},
			price: '15.00'
		},
		{
			title: 'Tulipas ao molho',
			description: 'Porção de tulipas com molho da casa.',
			image: {
				id: '740e2e88-f18a-11e9-81b4-2a2ae2dbcce4',
				filename: 'chicken_wings.jpg'
			},
			price: '39.99'
		},
		{
			title: 'Salada Caesar',
			description:
				'Uma mistura de alface romana e iceberg, tomate cereja, filé de peito de frango, croutons, queijo, molho César.',
			image: {
				id: '743ae3ee-f18d-11e9-81b4-2a2ae2dbcce4',
				filename: 'caesar_salad.jpg'
			},
			price: '35.00'
		},
		{
			title: 'Salada Grega',
			description: 'Tomate, pepino, pimentão, cebola, azeitona, queijo feta, azeite de oliva.',
			image: {
				id: '2780dba2-f18e-11e9-81b4-2a2ae2dbcce4',
				filename: 'greece_salad.jpg'
			},
			price: '30.00'
		},
		{
			title: 'Borsch',
			description: 'Sopa tradicional ucraniana com beterraba e porco.',
			image: {
				id: '46de98c0-f18b-11e9-81b4-2a2ae2dbcce4',
				filename: 'borsch.jpg'
			},
			price: '15.00'
		},
		{
			title: 'Sopa de Tomate',
			description: 'Sopa de Tomate com Queijo Mussarela e Manjericão Fresco.',
			image: {
				id: 'd11a970a-f18b-11e9-81b4-2a2ae2dbcce4',
				filename: 'tomato_soup.jpg'
			},
			price: '20.00'
		},
		{
			title: 'Sopa de Cebola',
			description:
				'Caldo de galinha, champignon, cebola, alho, óleo de girassol, manteiga, conhaque, queijo, sal, pimenta.',
			image: {
				id: '864322f0-f18c-11e9-81b4-2a2ae2dbcce4',
				filename: 'champ_soup.jpg'
			},
			price: '18.99'
		}
	]);

	await db.collection('users').insertMany([
		{
			login: 'admin',
			password: 'admin'
		}
	]);

	process.exit();
});
