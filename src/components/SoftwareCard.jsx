import Image from 'next/image'

import { techs } from 'ssot/technologies'

const colorVariants = {
	html: 'bg-[#f16a30]',
	css: 'bg-[#0899dd]',
	javascript: 'bg-[#F7E025]',
	typescript: 'bg-[#007ACC]',
	go: 'bg-[#08AFD8]',
	python: 'bg-[#fff]',
	php: 'bg-[#556096]',
	java: 'bg-[#fff]',
	node: 'bg-[#83CD29]',
	next: 'bg-[#fff]',
	react: 'bg-[#00D8FF]',
	nest: 'bg-[#FF0844]',
	express: 'bg-[#000]',
	mongo: 'bg-[#4FAA41]',
	mysql: 'bg-[#00546B]',
	docker: 'bg-[#2396ED]',
	aws: 'bg-[#FF9900]',
	git: 'bg-[#DE4C36]',
	figma: 'bg-[#fff]',
	github: 'bg-[#000]',
	tailwind: 'bg-[#44A8B3]',
	sass: 'bg-[#CD6799]',
}

const rowPosition = {
	0: '',
	1: 'absolute top-[60px] left-[150px]',
	2: 'absolute top-[120px] left-[-100px]',
	3: 'absolute top-[180px] left-[60px]',
}

export function SoftwareCard() {
	return (
		<div className='relative h-max'>
			{techs.map((row, i) => (
				<div key={i} className={`flex gap-[16px] ${rowPosition[i]}`}>
					{row.map((tech, j) => (
						<div
							key={j}
							className='flex items-center gap-[8px] bg-white w-max px-[16px] py-[8px] rounded-[64px]'
						>
							<div
								className={`w-max h-max p-[4px] grid place-items-center rounded-[50%] ${
									colorVariants[tech.colorVariant]
								}`}
							>
								<Image
									src={tech.svgPath}
									alt={tech.label.toLowerCase()}
									width={22}
									height={22}
								/>
							</div>
							<span className='font-bold text-[14px]'>{tech.label}</span>
						</div>
					))}
				</div>
			))}
		</div>
	)
}
