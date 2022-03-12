import { useRouter } from "next/dist/client/router";
import React, { useCallback, useState } from "react";

export default function HomePage() {
	const router = useRouter();
	const [username, setUsername] = useState("");

	const onInputChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
		setUsername(event.currentTarget.value);
	}, []);

	const onSearch = useCallback(
		(event: React.SyntheticEvent) => {
			event.preventDefault();
			router.push(`/users/${username}/repos`);
		},
		[username]
	);

	return (
		<div>
			<form className='search-bar' onSubmit={onSearch}>
				<label className='label'>
					<span className='label-text text-content-light text-lg'>Search for user</span>
				</label>
				<div className='input-field'>
					<input
						type='text'
						placeholder='The username you want to search for'
						className='input input-bordered w-full'
						onChange={onInputChange}
					/>
					<button className='btn btn-primary ml-4 self-end' onClick={onSearch}>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
