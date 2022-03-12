import React from "react";
import useGithubRepos from "./useGithubRepos";

interface RepoListPageProps {
	username: string;
}

export default function RepoListPage({ username }: RepoListPageProps) {
	const { isLoading, repos, onFetchRepos } = useGithubRepos(username);
	return (
		<div>
			{repos.map((repo) => (
				<p key={repo.node_id}>{repo.name}</p>
			))}
			<button className='btn btn-primary' onClick={onFetchRepos}>
				more
			</button>
		</div>
	);
}
