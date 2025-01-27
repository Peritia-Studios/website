export interface Update {
	title: string;
	date: string;
	version: string;
	description: string;
}

export let updates: Update[] = [
	{
		title: 'Alphas',
		date: '10.02.2024',
		version: 'alphas',
		description: 'Playtester only builds! No major public releases until this point.'
	}
];
