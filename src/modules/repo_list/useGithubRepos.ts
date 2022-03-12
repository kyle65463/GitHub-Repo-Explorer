import { Repo } from "@models/repo";
import { useState, useCallback, useEffect } from "react";
import { fetchUserRepoList } from "service/github";

export default function useGithubRepos(username: string) {
	const [page, setPage] = useState(1); // The next page number going to fetch
	const [repos, setRepos] = useState<Repo[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasMore, setHasMore] = useState(true);
	const [error, setError] = useState<string | null>();

	const onFetchRepos = useCallback(async () => {
		setIsLoading(true);
		const { repos: newRepos, error } = await fetchUserRepoList(username, page);
		setIsLoading(false);
		setHasMore(newRepos.length > 0);
		setRepos([...repos, ...newRepos]);
		setPage((curPage) => curPage + 1);
		setError(error);
	}, [page]);

	// Fetch repos when the page first rendered
	useEffect(() => {
		onFetchRepos();
	}, []);

	return { isLoading, repos, onFetchRepos, hasMore, error };
}
