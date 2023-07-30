import Link from 'next/link'

import { getDictionary } from 'utils/dictionaries'

export async function DownloadCVBtn() {
	const i18nDict = await getDictionary()

	return (
		<Link
			href='/nicohermida-cv-en.pdf'
			target='_blank'
			className='inline-block bg-PRIMARY text-white py-[8px] px-[16px] rounded-[20px] font-bold mt-[16px] hover:bg-PRIMARY-HOVER defaultTransition'
		>
			{i18nDict['about-cv']}
		</Link>
	)
}
