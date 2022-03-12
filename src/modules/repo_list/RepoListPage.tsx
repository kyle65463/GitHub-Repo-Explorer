import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoCard from "./RepoCard";
import useGithubRepos from "./useGithubRepos";

interface RepoListPageProps {
	username: string;
}

export default function RepoListPage({ username }: RepoListPageProps) {
	const router = useRouter();
	const { hasMore, repos, error, onFetchRepos } = useGithubRepos(username);

	const onBack = useCallback(() => {
		router.back();
	}, []);

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
			{error && (
				<div className='error-message'>
					<h2>{error}</h2>
					<button className='btn btn-primary mt-6' onClick={onBack}>
						Back
					</button>
				</div>
			)}
		</div>
	);
}
