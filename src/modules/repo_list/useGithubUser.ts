import { User } from "@models/user";
import { useState, useCallback, useEffect } from "react";
import { fetchUser } from "service/github";

export default function useGithubRepos(username: string) {
	const [user, setUser] = useState<User | undefined | null>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>();

	const onFetchUser = useCallback(async () => {
		setIsLoading(true);
		const { user: userRes, error } = await fetchUser(username);
		setIsLoading(false);
		setUser(userRes);
		setError(error);
	}, [username]);

	// Fetch the user when the page first rendered
	useEffect(() => {
		onFetchUser();
	}, []);

	return { isLoading, user, error };
}
