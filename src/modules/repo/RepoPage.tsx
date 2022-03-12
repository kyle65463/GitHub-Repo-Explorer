import ErrorMessage from "common/ErrorMessage";
import React, { useCallback } from "react";
import useGithubRepo from "./useGithubRepo";

interface RepoPageProps {
	username: string;
	reponame: string;
}

export default function RepoListPage({ username, reponame }: RepoPageProps) {
	const { isLoading, repo, error } = useGithubRepo(username, reponame);

	return (
		<div className='repo-page'>
			{error && <ErrorMessage error={error}/>}
		</div>
	);
}
