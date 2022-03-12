import React from "react";
import RepoCard from "./RepoCard";
import useGithubRepos from "./useGithubRepos";

interface RepoListPageProps {
	username: string;
}

export default function RepoListPage({ username }: RepoListPageProps) {
	const { isLoading, repos, onFetchRepos } = useGithubRepos(username);
	return (
		<div>
			<div className="repo-cards-container">
				{repos.map((repo) => (
					<RepoCard key={repo.node_id} repo={repo} />
				))}
			</div>
			<button className='btn btn-primary' onClick={onFetchRepos}>
				more
			</button>
		</div>
	);
}
