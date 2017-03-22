// Business.ts

export interface Business {
	$key?: string;
	company?: string;
	description?: string;
	category: string;
	years_in_business?:number;
	street_address?: string;
	city: string;
	state?: string;
	zipcoden?: string;
	phone?: string;
	email?: string;
	created_at: string;
}