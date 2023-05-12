'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import closeIcon from 'public/images/x-cerrar.svg';
import { useRouter } from 'next/router';
import supabase from '@/lib/supabaseClient';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const iconStyles = {
	background: 'transparent',
	filter:
		'invert(90%) sepia(74%) saturate(3294%) hue-rotate(319deg)brightness(95%) contrast(93%)',
	opacity: 1,
	alignSelf: 'flex-end',
	margin: '1em 1em 0.3em 0',
	fontSize: '1.5em',
};

const WorkWithUsForm = ({
	handleClose,
	title,
	description,
	uploadOpt = true,
}) => {
	const [input, setData] = useState({
		name: '',
		phone: '',
		email: '',
		comments: '',
	});
	const [attachment, setAttachment] = useState('');

	const [errors, setErrors] = useState({
		name: ' ',
		// phone: " ",
		email: ' ',
		comments: ' ',
		attachment: ' ',
	});

	const route = useRouter();

	useEffect(() => {
		if (!uploadOpt) setErrors((prev) => ({ ...prev, attachment: '' }));
	}, []);

	const validate = (input) => {
		if (input.name === 'email') {
			!/\S+@\S+\.\S+/.test(input.value)
				? setErrors((prev) => ({
						...prev,
						email: 'Ingresa un email válido',
				  }))
				: setErrors((prev) => ({ ...prev, email: '' }));
		} else if (input.name === 'name') {
			!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.value)
				? setErrors((prev) => ({
						...prev,
						name: 'Ingresa un nombre válido',
				  }))
				: setErrors((prev) => ({ ...prev, name: '' }));
			// } else if (input.name === 'phone') {
			// 	!/^(\+|00)[1-9][0-9 \-\(\)\.]{11,32}$/.test(input.value) ||
			// 	input.value.length < 8
			// 		? setErrors((prev) => ({
			// 				...prev,
			// 				phone: 'Ingresa un número de teléfono válido',
			// 		  }))
			// 		: setErrors((prev) => ({ ...prev, phone: '' }));
		} else if (input.name === 'comments') {
			input.value.length > 1000
				? setErrors((prev) => ({
						...prev,
						comments: 'Máximo 1000 caracteres',
				  }))
				: setErrors((prev) => ({ ...prev, comments: '' }));
		} else if (input.name === 'company') {
			!input.value.length
				? setErrors((prev) => ({
						...prev,
						company: 'Ingresa un nombre válido',
				  }))
				: setErrors((prev) => ({ ...prev, company: '' }));
		} else if (input.name === 'attachment') {
			!input.value.length
				? setErrors((prev) => ({
						...prev,
						attachment: ' ',
				  }))
				: setErrors((prev) => ({ ...prev, attachment: '' }));
		}
	};

	const handleOnChange = (event) => {
		event.preventDefault();
		setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
		if (event.target.name === 'attachment') {
			setAttachment(event.target.files);
		}
		validate(event.target);
	};

	const handleSubmit = async (event) => {
		//en esta funcion se ejecuta el aviso y se envia la informacion a la base de datos y al mail
		const { data, error } = await supabase.from('TrabajaConNosotros').insert([
			{
				title: title,
				name: input.name,
				phone: input.phone,
				email: input.email,
				consultation: input.comments,
			},
		]);
		if (attachment) {
			const { file, errorFile } = await supabase.storage
				.from('curriculums')
				.upload(attachment[0].name, attachment[0]);

			if (file) {
				setAttachment('');
			}
			if (errorFile) {
				console.log(error);
			}
		}
		if (data) {
			setData({
				name: '',
				phone: '',
				email: '',
				comments: '',
			});
		}
		if (error) {
			console.log(error);
		}
		return Swal.fire({
			title: uploadOpt
				? 'Tu currículum ha sido enviado con éxito.'
				: 'Tu consulta ha sido enviada con éxito.',
			text: 'Nos pondremos en contacto a la brevedad.',
			imageUrl: '../images/consulta-enviada-con-exito.gif',
			imageWidth: 200,
			imageHeight: 150,
			imageAlt: 'Consulta enviada',
			width: '45em',
			showConfirmButton: false,
			timer: 5000,
			timerProgressBar: true,
		}).then((isOk) => {
			if (isOk) {
				event.target.submit();
			}
			return false;
		});
	};

	let isDisabled = Object.values(errors).join('').length ? true : false;

	return (
		<>
			<div className='fixed z-[300] inset-0 font-Noah overflow-y-auto xsm:h-[40rem] md:h-full'>
				<div className='flex items-center justify-center max-h-screen pt-10 px-4 pb-5 text-center sm:block sm:p-0'>
					<div className='fixed inset-0 transition-opacity' aria-hidden='true'>
						<div className='absolute inset-0 bg-black opacity-50'></div>
					</div>

					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'
					>
						&#8203;
					</span>

					<div className='inline-block relative align-bottom rounded-lg text-left shadow-2xl transform transition-all my-2 sm:align-middle xsm:h-full bg-white'>
						<button
							className='absolute transition duration-150 ease-in-out ml-4 mb-4 top-0 h-8 md:h-10 right-0'
							onClick={() => handleClose(false)}
						>
							<Image
								src={closeIcon}
								alt='Cerrar'
								width={30}
								height={30}
								style={iconStyles}
							/>
						</button>
						<div className='px-4 md:px-12 pt-10 pb-2 md:py-12 rounded-t-lg'>
							<div className='pt-4'>
								<h2 className='text-darkBlue md:px-2 xsm:text-xl lg:text-3xl font-semibold text-ellipsis text-center'>
									{title}
								</h2>
								<p className='xsm:p-1 xsm:pb-4 md:p-3 md:pb-12 font-semibold text-ellipsis text-center text-[12px] md:text-sm lg:text-base'>
									{description}
								</p>
							</div>
							<form
								onSubmit={handleSubmit}
								action={
									route.pathname === '/services'
										? 'https://formsubmit.co/consultora@enlazar.xyz'
										: 'https://formsubmit.co/talento@enlazar.xyz'
								}
								method='POST'
								encType='multipart/form-data'
							>
								<div className='w-full flex flex-col md:flex-row justify-evenly items-center'>
									<div className='flex flex-col w-full justify-center md:w-2/4 md:mr-2 md:mb-0'>
										<input
											type='text'
											name='name'
											value={input.name}
											placeholder='Nombre y Apellido'
											onChange={handleOnChange}
											className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
											required
										/>

										<small className='h-6 text-red-600'>{errors.name}</small>
									</div>
									<div className='flex flex-col w-full justify-center md:w-2/4 md:mr-2 md:mb-0'>
										<input
											type='tel'
											name='phone'
											value={input.phone}
											placeholder='Teléfono'
											onChange={handleOnChange}
											className='flex justify-between w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
											required
										/>
										<small className='h-6 text-red-600'>{errors.phone}</small>
									</div>
								</div>
								<div className='flex flex-col w-full justify-center md:w-auto md:mr-2 md:mb-0'>
									<input
										type='email'
										name='email'
										value={input.email}
										placeholder='Email'
										onChange={handleOnChange}
										className='flex w-full xsm:h-8 md:h-[3.3rem] xsm:py-1 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg bg-transparent'
										required
									/>
									<small className='h-6 text-red-600'>{errors.email}</small>
								</div>
								<div className='flex flex-col w-full justify-center md:w-auto md:mr-2 md:mb-0'>
									<textarea
										name='comments'
										value={input.comments}
										placeholder='Contanos un poco sobre vos'
										onChange={handleOnChange}
										rows={1}
										className='flex w-full md:h-36 xsm:py-3 xsm:px-4 md:py-2 md:px-4 border border-solid border-grey rounded-xl xsm:text-xs md:text-lg resize-none md:mb-3 bg-transparent'
										required
									/>
									<div className='flex justify-between'>
										<small className='h-6 text-red-600'>
											{errors.comments}
										</small>
										<small
											className={
												errors.comments
													? 'h-6 text-red-600'
													: 'h-6 text-green-600'
											}
										>
											{!input.comments.length ? '' : input.comments.length}
										</small>
									</div>
								</div>
								<div className='flex md:pt-3 justify-end self-center'>
									<div
										className={
											uploadOpt ? 'flex flex-col items-center' : 'hidden'
										}
									>
										<label
											className='border-2 border-yellow rounded-2xl xsm:text-xs md:text-base px-2 py-1 font-semibold uppercase text-center '
											htmlFor='cv'
										>
											Cargar Archivo
										</label>
										<input
											id='cv'
											type='file'
											name='attachment'
											accept='application/pdf, .doc,.docx,application/msword'
											hidden={true}
											onChange={handleOnChange}
										/>
										<small
											className={
												errors.attachment
													? 'text-red-600 text-center text-[10px] md:text-sm'
													: 'text-green-600 text-center'
											}
										>
											{errors.attachment
												? 'No se eligió un archivo'
												: 'CV cargado con éxito'}
										</small>
									</div>
									<div className='pl-5'>
										<button
											className={
												isDisabled
													? 'border-2 border-grey bg-grey text-gray-500 rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'
													: 'bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end'
											}
											type='submit'
											disabled={isDisabled}
										>
											Enviar
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkWithUsForm;
