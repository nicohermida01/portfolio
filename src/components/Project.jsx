import Link from 'next/link'
import Image from 'next/image'

import { CodeIcon } from 'components/icons/CodeIcon'
import { LinkedInIcon } from 'components/icons/LinkedinIcon'

export function Project({
	label,
	title,
	helper,
	description,
	techs,
	linkedinUrl,
	codeUrl,
	websiteUrl,
	imgUrl,
	imgAlt,
}) {
	return (
		<div className='flex flex-col items-center gap-[50px] [&>div]:even:flex-row-reverse lg:[&>div]:even:flex-col sm:gap-[20px]'>
			<span
				className={`w-max text-[16px] px-4 py-2 rounded-full bg-PRIMARY sm:text-[12px] sm:mb-[20px]`}
			>
				{label}
			</span>

			<div className='flex justify-center gap-[50px] lg:flex-col sm:gap-[20px]'>
				<div className='w-max flex flex-col justify-center items-center text-center relative lg:w-full lg:order-2'>
					<div className='homeBackground absolute left-0 h-screen w-full -z-10 lg:bottom-[-370px] sm:!bottom-[-250px] 2sm:!bottom-[-70px]'></div>

					<h3 className='text-[2rem] font-bold text-center sm:text-[20px]'>
						{title}
					</h3>

					{helper && (
						<span className='inline-block text-[14px] text-TEXT_SECONDRAY2 sm:text-[12px]'>
							{helper}
						</span>
					)}

					<p className='max-w-sm text-TEXT_SECONDARY1 my-4 text-center sm:text-[12px]'>
						{description}
					</p>

					{techs && (
						<ul className='text-TEXT_SECONDRAY2 text-[16px] flex gap-2 sm:text-[12px] flex-wrap justify-center'>
							{techs.map((tech, i) => (
								<li key={i}>{tech}</li>
							))}
						</ul>
					)}

					<div className='mt-8 text-[14px] flex items-center gap-4 sm:text-[12px] 2sm:flex-col'>
						{linkedinUrl && (
							<Link
								href={linkedinUrl}
								aria-label='Go to linkedin profile'
								target='_blank'
								className='bg-PAYLOAD_BLUE px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
							>
								<LinkedInIcon className='h-[20px] w-[20px] fill-BASE_TEXT sm:w-[18px] sm:h-[18px]' />
								LinkedIn
							</Link>
						)}

						{codeUrl && (
							<Link
								href={codeUrl}
								aria-label='Go to github repository'
								target='_blank'
								className='bg-PAYLOAD_BLUE px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
							>
								<CodeIcon className='h-[20px] w-[20px] stroke-BASE_TEXT sm:w-[18px] sm:h-[18px]' />
								View code
							</Link>
						)}

						{websiteUrl && (
							<Link
								href={websiteUrl}
								aria-label='go to project website'
								target='_blank'
								className='border-GRAY_1 border-2 px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold defaultTransition hover:border-GRAY_1HOVER'
							>
								Visit project
							</Link>
						)}
					</div>
				</div>

				<Image
					src={imgUrl}
					alt={imgAlt}
					width={630}
					height={360}
					className=' rounded-md lg:order-1 lg:w-[full]'
				/>
			</div>
		</div>
	)
}
