import ForkIcon from "@mui/icons-material/ForkLeft";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ErrorMessage from "common/ErrorMessage";
import React from "react";
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
				<div>
					{/* Title */}
					<section className='title'>
						{/* Repo's full name */}
						<h2>{full_name}</h2>

						<div className='info-container'>
							{/* Stargazers count */}
							{stargazers_count !== undefined && (
								<span className='info'>
									<StarOutlineIcon sx={{ fontSize: 20 }} />
									<span className='info-label'>Star</span>
									<span className='info-count'>{stargazers_count}</span>
								</span>
							)}

							{/* Forks count */}
							{forks_count !== undefined && (
								<span className='info'>
									<ForkIcon sx={{ fontSize: 20 }} />
									<span className='info-label'>Fork</span>
									<span className='info-count'>{forks_count}</span>
								</span>
							)}
						</div>
					</section>

					{/* Description section */}
					<section>
						<h3>Description</h3>
						<p>{description ?? "No description"}</p>
					</section>

					{/* Language section */}
					{language && (
						<section>
							<h3>Language</h3>
							<p>{language}</p>
						</section>
					)}

					{/* Topics section */}
					{topics && topics?.length > 0 && (
						<section>
							<h3>Topics</h3>
							<p>
								{topics.map((topic, i) => (
									<div key={i} className='topic-badge'>
										{topic}
									</div>
								))}
							</p>
						</section>
					)}
				</div>
			)}
			{isLoading && <h4 className='loading abs-center'>Loading...</h4>}
			{error && <ErrorMessage error={error} />}
		</div>
	);
}
