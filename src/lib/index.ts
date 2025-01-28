import { DateTime } from 'luxon';

export interface Update {
	title: string;
	date: DateTime;
	version: string;
	description: string;
}

export let updates: Update[] = [
	{
		title: 'Alphas',
		date: DateTime.fromISO('2024-02-10'),
		version: 'alphas',
		description: 'Playtester only builds! No major public releases until this point.'
	}
];
