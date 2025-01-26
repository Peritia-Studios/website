export interface Update {
	title: string;
	date: string;
	version: string;
	description: string;
}

export let updates: Update[] = [
	{
		title: 'Betas',
		date: '10.02.2024',
		version: 'betas',
		description: 'Playtester only builds! No major public releases until this point.'
	}
];
