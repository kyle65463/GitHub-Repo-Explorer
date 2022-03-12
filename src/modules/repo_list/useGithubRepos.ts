import { Repo } from "@models/repo";
import { useState, useCallback, useEffect } from "react";
import { fetchUserRepoList } from "service/github";

export default function useGithubRepos(username: string) {
	const [page, setPage] = useState(1); // The next page number going to fetch
	const [repos, setRepos] = useState<Repo[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const onFetchRepos = useCallback(async () => {
		setIsLoading(true);
		const newRepos = await fetchUserRepoList(username, page);
		setIsLoading(false);
		setRepos([...repos, ...newRepos]);
		setPage((curPage) => curPage + 1);
	}, [page]);

	// Fetch repos when the page first rendered
	useEffect(() => {
		onFetchRepos();
	}, []);

	return { isLoading, repos, onFetchRepos };
}
