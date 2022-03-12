import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RepoCard from "./RepoCard";
import useGithubRepos from "./useGithubRepos";
import useGithubUser from "./useGithubUser";

interface RepoListPageProps {
	username: string;
}

export default function RepoListPage({ username }: RepoListPageProps) {
	const router = useRouter();
	const { hasMore, repos, error, onFetchRepos } = useGithubRepos(username);
	const { user } = useGithubUser(username);

	const onBack = useCallback(() => {
		router.back();
	}, []);

	return (
		<div className='repo-list-page'>
			{user && (
				<section className='user-section'>
					<div className='flex items-center'>
						<div className='avatar w-16 mr-6'>
							<img src={user.avatar_url} alt='avatar' className='rounded-full' />
						</div>
						<div>
							<h1 className='text-4xl'>{user.name || username}</h1>
							{user.bio && <p className='mt-1 text-content-light'>{user.bio}</p>}
						</div>
					</div>
					<p className='self-end mt-1 text-content-mid'>{user.public_repos} Repositories</p>
				</section>
			)}
			<InfiniteScroll
				dataLength={repos.length}
				next={onFetchRepos}
				hasMore={hasMore}
				loader={
					<h4
						className={`text-2xl text-content-mid text-center ${
							repos.length > 0 ? "mt-6 mb-20" : "loading-center"
						} `}
					>
						Loading...
					</h4>
				}
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
