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
		<div className='flex justify-between gap-12 even:flex-row-reverse relative'>
			<span
				className={`w-max text-[12px] px-4 py-2 rounded-full flex bg-PRIMARY absolute top-[-80px] left-[calc(50%-30px)]`}
			>
				{label}
			</span>
			<div className='w-full flex flex-col justify-center items-center'>
				<div className='homeBackground absolute left-[-200px] h-screen w-full -z-10'></div>

				<h3 className='text-[2rem] font-bold'>{title}</h3>

				{helper && (
					<span className='inline-block text-[14px] text-TEXT_SECONDRAY2'>
						{helper}
					</span>
				)}

				<p className='max-w-sm text-TEXT_SECONDARY1 my-4 text-center'>
					{description}
				</p>

				{techs && (
					<ul className='text-TEXT_SECONDRAY2 text-[14px] flex gap-2'>
						{techs.map((tech, i) => (
							<li key={i}>{tech}</li>
						))}
					</ul>
				)}

				<div className='mt-8 text-[14px] flex items-center gap-4'>
					{linkedinUrl && (
						<Link
							href={linkedinUrl}
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

					{codeUrl && (
						<Link
							href={codeUrl}
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

					{websiteUrl && (
						<Link
							href={websiteUrl}
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
				className='rounded-md'
			/>
		</div>
	)
}
