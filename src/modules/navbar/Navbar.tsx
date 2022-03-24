import { useRouter } from "next/dist/client/router";
import React, { useCallback } from "react";

export default function Navbar() {
	const router = useRouter();

	const onLogoClick = useCallback(() => {
		router.push("/");
	}, []);

	return (
		<nav className='navbar bg-base-100 shadow-sm w-full'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl' onClick={onLogoClick}>
					GitHub Repo Viewer
				</a>
			</div>
			<div className='flex-none'>
				<ul className='menu flex-row p-0'>
					<li>
						<a target='_blank' href='https://www.kyle65463.com'>
							Author
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
