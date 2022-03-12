import { useRouter } from "next/dist/client/router";
import Link from "next/link";
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
						<Link href='/about'> About </Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
