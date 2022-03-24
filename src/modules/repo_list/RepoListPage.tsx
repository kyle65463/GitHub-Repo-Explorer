import ErrorMessage from "common/ErrorMessage";
import { useRouter } from "next/dist/client/router";
import React from "react";
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

	return (
		<div className='repo-list-page'>
			{/* User */}
			{user && (
				<section className='user-section'>
					<div className='flex items-center'>
						{/* Avatar */}
						<div className='avatar w-16 mr-6'>
							<img src={user.avatar_url} alt='avatar' className='rounded-full' />
						</div>
						<div>
							{/* Username */}
							<h2>{user.name || username}</h2>

							{/* User's bio */}
							{user.bio && <p className='mt-1 text-content-light'>{user.bio}</p>}
						</div>
					</div>

					{/* Repositories count */}
					<p className='repositories'>{user.public_repos} Repositories</p>
				</section>
			)}

			{/* Repo cards */}
			<InfiniteScroll
				dataLength={repos.length}
				next={onFetchRepos}
				hasMore={hasMore}
				loader={<h4 className={`loading ${repos.length > 0 ? "mt-6 mb-20" : "abs-center"} `}>Loading...</h4>}
			>
				<div className='repo-cards-container'>
					{repos.map((repo) => (
						<RepoCard key={repo.node_id} username={username} repo={repo} />
					))}
				</div>
			</InfiniteScroll>

			{/* Error messsage */}
			{error && <ErrorMessage error={error} />}
		</div>
	);
}
