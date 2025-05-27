import Image from 'next/image'

import { VisitProjectButton } from 'components/VisitProjectButton'
import { ViewCodeButton } from 'components/ViewCodeButton'
import { LinkedinButton } from 'components/LinkedinButton'

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
	codeButtonPrimary,
}) {
	return (
		<div className='flex flex-col items-center gap-[50px] [&>div]:even:flex-row-reverse lg:[&>div]:even:flex-col sm:gap-[20px]'>
			<span
				className={`w-max text-[16px] px-4 py-2 rounded-full bg-PRIMARY sm:text-[12px] sm:mb-[20px] inline-block relative`}
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
						{linkedinUrl && <LinkedinButton url={linkedinUrl} />}

						{codeUrl && <ViewCodeButton url={codeUrl} />}

						{websiteUrl && (
							<VisitProjectButton
								url={websiteUrl}
								isPrimary={codeButtonPrimary}
							/>
						)}
					</div>
				</div>

				<Image
					src={`/images/${imgUrl}`}
					alt={imgAlt}
					width={630}
					height={360}
					className=' rounded-md lg:order-1 lg:w-[full]'
				/>
			</div>
		</div>
	)
}
