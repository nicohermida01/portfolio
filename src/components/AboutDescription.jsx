import { DownloadCVBtn } from 'components/DownloadCVBtn'

export async function AboutDescription() {
	return (
		<div className='descriptionCard'>
			<div className='flex flex-col gap-[8px] text-TEXT-DESCRIPTION'>
				<div className=''>
					<p className='font-bold text-[26px]'>Hey there!</p>
					<p className='text-[20px] leading-[12px]'>
						My name is Nicolas Hermida
					</p>
					<p className='text-[18px]'>
						I&apos;m a programmer, 23 years old, living in Argentina
					</p>
				</div>
				<p>
					Ever since I was young, I&apos;ve been fascinated by the world of
					computers and technology. Currently, I&apos;m a university student
					pursuing a degree in Computer Science.
				</p>
				<p>
					In 2019, I began self-studying web development, learning the
					fundamentals of HTML, CSS, and Javascript. Today, I possess a strong
					command of an extensive stack of frameworks and packages, enabling me
					to apply them effectively in both frontend and backend projects.
					Below, you will find some of the projects I have done to put into
					practice and improve my skills.
				</p>
				<p>
					If you have a project in mind and believe that I have the necessary
					capabilities, please do not hesitate to get in touch!
				</p>
				<p>
					Thank you for visiting my portfolio, and I hope you enjoy exploring my
					projects!
				</p>
			</div>
		</div>
	)
}
