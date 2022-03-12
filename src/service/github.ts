import { Repo } from "@models/repo";
import { User } from "@models/user";
import { numRepoPerFetch } from "@utils/constants";
import axios from "axios";

interface FetchUserRepoListResult {
	repos: Repo[];
	error: string | null;
}

export async function fetchUserRepoList(username: string, page: number = 1): Promise<FetchUserRepoListResult> {
	try {
		const res = await axios.get(`https://api.github.com/users/${username}/repos`, {
			params: {
				per_page: numRepoPerFetch,
				page,
			},
		});
		const repos = res.data as Repo[];
		return { repos, error: null };
	} catch (err) {
		if (axios.isAxiosError(err) && err.response?.status === 404) {
			return { repos: [], error: "User not found" };
		}
		return { repos: [], error: "Oops, something went wrong" };
	}
}

interface FetchUserResult {
	user: User | null;
	error: string | null;
}

export async function fetchUser(username: string): Promise<FetchUserResult> {
	try {
		const res = await axios.get(`https://api.github.com/users/${username}`, {});
		const user = res.data as User;
		return { user, error: null };
	} catch (err) {
		if (axios.isAxiosError(err) && err.response?.status === 404) {
			return { user: null, error: "User not found" };
		}
		return { user: null, error: "Oops, something went wrong" };
	}
}
