import Link from 'next/link'

import { projectsAndJobs } from 'ssot/projectsAndJobs'
import { GithubIcon } from 'components/icons/GithubIcon'
import { Project } from 'components/Project'

export function ProjectsSection() {
	return (
		<section id='projects' className='py-40 sm:py-[100px]'>
			<div className='flex flex-col gap-[200px] sm:gap-[100px] '>
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

			<div className='text-[2rem] font-bold mt-24 flex flex-col items-center gap-4 text-center sm:text-[20px]'>
				And many more on my GitHub profile
				<Link
					href='https://github.com/nicohermida01'
					aria-label='Go to github profile'
					target='_blank'
					className='animate-wiggle-more animate-infinite'
				>
					<GithubIcon className='fill-BASE_TEXT h-[70px] w-[70px] sm:w-[40px] sm:h-[40px]' />
				</Link>
			</div>
		</section>
	)
}
