import Image from 'next/image'
import Link from 'next/link'

import { projectsAndJobs } from 'ssot/projectsAndJobs'
import { LinkedInIcon } from 'components/icons/LinkedinIcon'
import { CodeIcon } from 'components/icons/CodeIcon'
import { GithubIcon } from 'components/icons/GithubIcon'

export function ProjectsSection() {
	return (
		<section
			id='projects'
			className='min-h-screen max-w-appMWidth mx-auto px-6 py-40'
		>
			<div className='flex flex-col gap-40'>
				{projectsAndJobs.map((elem, i) => (
					<div
						key={i}
						className='flex justify-between gap-12 even:flex-row-reverse relative'
					>
						<span
							className={`w-max text-[12px] px-4 py-2 rounded-full flex bg-PRIMARY absolute top-[-80px] left-[calc(50%-30px)]`}
						>
							{elem.label}
						</span>
						<div className='w-full flex flex-col justify-center items-center'>
							<div className='homeBackground absolute left-[-200px] h-screen w-full -z-10'></div>

							<h3 className='text-[2rem] font-bold'>{elem.title}</h3>

							{elem.helper && (
								<span className='inline-block text-[14px] text-TEXT_SECONDRAY2'>
									{elem.helper}
								</span>
							)}

							<p className='max-w-sm text-TEXT_SECONDARY1 my-4 text-center'>
								{elem.description}
							</p>

							{elem.techs && (
								<ul className='text-TEXT_SECONDRAY2 text-[14px] flex gap-2'>
									{elem.techs.map((tech, i) => (
										<li key={i}>{tech}</li>
									))}
								</ul>
							)}

							<div className='mt-8 text-[14px] flex items-center gap-4'>
								{elem.linkedinUrl && (
									<Link
										href={elem.linkedinUrl}
										target='_blank'
										className='bg-PAYLOAD_BLUE px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
									>
										<LinkedInIcon
											width='20px'
											height='20px'
											className='fill-BASE_TEXT'
										/>
										LinkedIn
									</Link>
								)}

								{elem.codeUrl && (
									<Link
										href={elem.codeUrl}
										target='_blank'
										className='bg-PAYLOAD_BLUE px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
									>
										<CodeIcon
											width='20px'
											height='20px'
											className='stroke-BASE_TEXT'
										/>
										View code
									</Link>
								)}

								{elem.websiteUrl && (
									<Link
										href={elem.websiteUrl}
										target='_blank'
										className='border-GRAY_1 border-2 px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold defaultTransition hover:border-GRAY_1HOVER'
									>
										Visit project
									</Link>
								)}
							</div>
						</div>

						<Image
							src={elem.imgUrl}
							alt={elem.imgAlt}
							width={630}
							height={360}
							className='rounded-md'
						/>
					</div>
				))}
			</div>

			<div className='text-[2rem] font-bold mt-24 flex flex-col items-center gap-4'>
				And many more on my GitHub profile
				<Link
					href='https://github.com/nicohermida01'
					target='_blank'
					className='animate-wiggle-more animate-infinite'
				>
					<GithubIcon width='70px' height='70px' className='fill-BASE_TEXT' />
				</Link>
			</div>
		</section>
	)
}
