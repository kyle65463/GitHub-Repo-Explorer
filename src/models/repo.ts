import { id } from "@utils/types";

export interface Repo {
	node_id: id;
	name: string;
	forks_count: number;
	stargazers_count: number;
	watchers_count: number;
	language: string;
}
