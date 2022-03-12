import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoCard from "./RepoCard";
import useGithubRepos from "./useGithubRepos";

interface RepoListPageProps {
	username: string;
}

export default function RepoListPage({ username }: RepoListPageProps) {
	const { hasMore, repos, onFetchRepos } = useGithubRepos(username);
	return (
		<div>
			<InfiniteScroll
				dataLength={repos.length} //This is important field to render the next data
				next={onFetchRepos}
				hasMore={hasMore}
				loader={<h4 className='text-center pt-6'>Loading...</h4>}
			>
				<div className='repo-cards-container'>
					{repos.map((repo) => (
						<RepoCard key={repo.node_id} username={username} repo={repo} />
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
}
