import { Query } from '../pool';

export interface UsersTable {
	id?: string;
	email?: string;
	password?: string;
	first_name?: string;
	last_name?: string;
	created_at?: string;
}

const find = (col: string, val: string) =>
	Query<UsersTable[]>(`SELECT * FROM users WHERE ?? = ?;`, [col, val]);

const insert = (values: {
	id: string;
	email: string;
	password: string;
	first_name: string;
	last_name: string;
}) =>
	Query('INSERT INTO users SET ?;', values);

export default {
	find,
    insert
};