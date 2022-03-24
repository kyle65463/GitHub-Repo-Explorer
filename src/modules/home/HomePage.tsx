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
			if (username) {
				router.push(`/users/${username}/repos`);
			}
		},
		[username]
	);

	return (
		<div>
			<form className='search-bar' onSubmit={onSearch}>
				{/* Input label */}
				<label className='label'>
					<span className='label-text text-content-mid text-lg font-header'>Search for users</span>
				</label>

				<div className='input-field'>
					{/* Input field */}
					<input
						type='text'
						placeholder='Enter the username you want to search for'
						className='input input-bordered w-full'
						onChange={onInputChange}
					/>

					{/* Search button */}
					<button onClick={onSearch}>Search</button>
				</div>
			</form>
		</div>
	);
}
