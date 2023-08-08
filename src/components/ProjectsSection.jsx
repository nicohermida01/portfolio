import Link from 'next/link'

import { projectsAndJobs } from 'ssot/projectsAndJobs'
import { GithubIcon } from 'components/icons/GithubIcon'
import { Project } from 'components/Project'

export function ProjectsSection() {
	return (
		<section
			id='projects'
			className='min-h-screen max-w-appMWidth mx-auto px-6 py-40'
		>
			<div className='flex flex-col gap-48'>
				{projectsAndJobs.map((elem, i) => (
					<Project
						key={i}
						label={elem.label}
						title={elem.title}
						helper={elem.helper}
						description={elem.description}
						techs={elem.techs}
						imgUrl={elem.imgUrl}
						imgAlt={elem.imgAlt}
						linkedinUrl={elem.linkedinUrl}
						codeUrl={elem.codeUrl}
						websiteUrl={elem.websiteUrl}
					/>
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
