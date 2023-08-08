export function InputField({
	label,
	type,
	placeholder,
	id,
	isRequired,
	value,
	onChange,
}) {
	return (
		<div className='flex flex-col w-full'>
			<label htmlFor={id} className='text-TEXT_SECONDRAY2'>
				{label}
			</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				required={isRequired}
				className='bg-transparent mt-2 border-b-2 border-PRIMARY p-2 focus:outline-none'
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}
