import { Repo } from "@models/repo";
import { useState, useCallback, useEffect } from "react";
import { fetchRepo } from "service/github";

export default function useGithubRepo(username: string, reponame: string) {
	const [repo, setRepo] = useState<Repo | undefined | null>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>();

	const onFetchRepo = useCallback(async () => {
		setIsLoading(true);
		const { repo: repoRes, error } = await fetchRepo(username, reponame);
		setIsLoading(false);
		setRepo(repoRes);
		setError(error);
	}, [username, reponame]);

	// Fetch the repo when the page first rendered
	useEffect(() => {
		onFetchRepo();
	}, []);

	return { isLoading, repo, error };
}
