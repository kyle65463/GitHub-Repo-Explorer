import { Repo } from "@models/repo";
import { numRepoPerFetch } from "@utils/constants";
import axios from "axios";

export async function fetchUserRepoList(username: string, page: number = 1): Promise<Repo[]> {
	const res = await axios.get(`https://api.github.com/users/${username}/repos`, {
		params: {
			per_page: numRepoPerFetch,
			page,
		},
	});
	const repos = res.data as Repo[];
	return repos;
}
