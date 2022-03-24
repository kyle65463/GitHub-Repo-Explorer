import ErrorMessage from "common/ErrorMessage";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ForkIcon from "@mui/icons-material/ForkLeft";
import React, { useCallback } from "react";
import useGithubRepo from "./useGithubRepo";

interface RepoPageProps {
	username: string;
	reponame: string;
}

export default function RepoListPage({ username, reponame }: RepoPageProps) {
	const { isLoading, repo, error } = useGithubRepo(username, reponame);
	const { full_name, language, stargazers_count, forks_count, description, topics } = repo || {};

	return (
		<div className='repo-page'>
			{repo && (
				<div className='shadow-sm'>
					<div className='flex justify-between items-center'>
						<h2 className='text-2xl font-bold text-primary'>
							<span>{full_name}</span>
						</h2>
						<div className='info-container'>
							{stargazers_count !== undefined && (
								<span className='info'>
									<StarOutlineIcon sx={{ fontSize: 20 }} />
									<span className='info-label'>Star</span>
									<span className='info-count'>{stargazers_count}</span>
								</span>
							)}
							{forks_count !== undefined && (
								<span className='info'>
									<ForkIcon sx={{ fontSize: 20 }} />
									<span className='info-label'>Fork</span>
									<span className='info-count'>{forks_count}</span>
								</span>
							)}
						</div>
					</div>
					<h3 className='text-header text-lg mt-7'>Description</h3>
					<p className='text-content-mid mt-1'>{description}</p>
					{language && (
						<div>
							<h3 className='text-header text-lg mt-7'>Language</h3>
							<p className='text-content-mid mt-1'>{language}</p>
						</div>
					)}
					{topics && (
						<div>
							<h3 className='text-header text-lg mt-7'>Topics</h3>
							<p className='text-content-mid mt-1'>
								{topics.map((topic, i) => (
									<div key={i} className='badge badge-primary mr-1'>
										{topic}
									</div>
								))}
							</p>
						</div>
					)}
				</div>
			)}
			{error && <ErrorMessage error={error} />}
		</div>
	);
}
