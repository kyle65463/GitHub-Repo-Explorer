import { id } from "@utils/types";

export interface Repo {
	node_id: id;
	name: string;
	full_name: string;
	forks_count: number;
	stargazers_count: number;
	language: string;
	description: string;
	updated_at: string;
	topics: string[];
}
