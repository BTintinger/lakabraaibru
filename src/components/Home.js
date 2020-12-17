import React from 'react'

export default function Home() {
	return (
		<main>
			<img
				src='https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
				alt='braai/bbq'
				className='absolute object-cover w-full h-full'
			/>
			<section className='relative flex justify-center min-h-screen pt-12 lg:pt-36 px-8'>
				<h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
					Howzit, Let's Braai!
				</h1>
			</section>
		</main>
	)
}
