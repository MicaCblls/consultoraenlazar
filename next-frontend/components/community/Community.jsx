import Image from 'next/image';
import Background from '@/public/images/portada-comunidad.webp';
import BackgroundMobile from '@/public/images/portada-comunidad-mobile.webp';
import Airplane from '@/public/images/avioncito.gif';
import Link from 'next/link';

const ChevronsDown = ({ size = 50, color = '#34668b' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		stroke={color}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M7 13l5 5 5-5M7 6l5 5 5-5' />
	</svg>
);

const Community = () => {
	return (
		<div className='relative'>
			<section
				id='banner'
				className='flex flex-col xsm:h-[225px] md:h-[600px] lg:h-[490px] overflow-hidden'
			>
				<Image
					src={Background}
					alt='Header'
					priority
					className='xsm:hidden md:block md:object-none lg:object-cover h-full'
				/>
				<Image
					src={BackgroundMobile}
					alt='Header'
					priority
					className='xsm:block md:hidden'
				/>
				<div className='absolute left-0 right-0 bottom-0 top-0 xsm:h-[225px] md:h-[600px] lg:h-[490px]'>
					<div className='flex w-full h-full justify-center items-center'>
						<p className='text-center text-white md:text-3xl font-semibold'>
							¡Sé parte de nuestra comunidad y<br />
							encontrá todo lo que tenés que saber sobre
							<br />
							el mundo laboral!
						</p>
					</div>
				</div>
			</section>
			<section id='services' className='flex flex-col xsm:pb-28 md:pb-24 lg:h-[700px]'>
				<div className='flex justify-center pt-5'>
					<Link href='#services' className='animate-bounce xsm:pt-16 md:pt-12 lg:pt-6 xsm:pb-6 md:pb-12'>
						<ChevronsDown />
					</Link>
				</div>
				<h3 className='text-2xl md:text-3xl font-semibold text-left text-ellipsis opacity-90 text-black pt-5 md:pb-0 lg:pb-14 xsm:pl-4 md:pl-12'>
					Encontrarás
				</h3>
				<div className='xsm:grid xsm:grid-cols-3 md:grid lg:flex md:justify-items-center lg:flex-wrap justify-center xsm:pb-10 md:pb-24 xsm:px-2 xsm:pt-12'>
					<div className='flex flex-col items-center md:h-[160px] md:w-[210px]'>
						<Image
							src='/images/icono-tips-consejos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium text-center'>Tips y consejos</p>
					</div>
					<div className='flex flex-col items-center md:h-[160px] md:w-[210px]'>
						<Image
							src='/images/icono-ofertas-empleos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium text-center'>Ofertas de empleo</p>
					</div>
					<div className='flex flex-col items-center md:h-[160px] md:w-[210px]'>
						<Image
							src='/images/icono-charlas-vivo.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium text-center'>Charlas en vivo</p>
					</div>
					<div className='flex flex-col items-center md:h-[160px] md:w-[210px]'>
						<Image
							src='/images/icono-espacio-emprender.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium text-center'>
							Espacio para emprendedores
						</p>
					</div>
					<div className='flex flex-col items-center md:h-[160px] md:w-[210px]'>
						<Image
							src='/images/icono-webinars-gratuitos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium text-center'>Webinars gratuitos</p>
					</div>
					<div className='flex flex-col items-center md:h-[160px] md:w-[210px]'>
						<Image
							src='/images/icono-descuentos-cursos.svg'
							width='110'
							height='110'
							alt='Header'
							priority
							className=''
						/>
						<p className='font-medium text-center'>
							Descuentos en nuestros <br /> Cursos y Talleres
						</p>
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<Link href='https://www.instagram.com/enlazar.ok/' target='_blank'>
						<button className='bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end w-48'>
							Ir ahora
						</button>
					</Link>
				</div>
			</section>
			<section id='telegram' className='relative bg-grey'>
				<Image
					src={Airplane}
					alt='Avion volando'
					priority
					className='xsm:hidden md:block'
				/>
				<div className='md:absolute left-0 right-0 bottom-0 xsm:top-24 md:top-32'>
					<h3 className='xsm:text-xl md:text-2xl font-semibold text-left text-ellipsis opacity-90 text-black xsm:pl-6 xsm:pt-16 md:pl-40'>
						También te esperamos
						<br />
						en Telegram...
					</h3>
					<div className='xsm:pl-6 md:pl-40 xsm:pt-2 md:pt-4 xsm:pb-10 md:pb-16'>
						<ul>
							<li>• Ofertas de empleo</li>
							<li>• Networking</li>
							<li>• Tips para mejorar tu perfil profesional</li>
							<li>• Acompañamiento para la inserción laboral</li>
							<li>• Apoyo profesional</li>
							<li>• Contenido de calidad</li>
							<li>• Información de actualidad</li>
							<li>• Cursos y capacitaciones</li>
						</ul>
					</div>
					<Link
						href='https://t.me/joinchat/e8dtvJ5XB2k1MGIx'
						target='_blank'
						className='xsm:pl-20 md:pl-40'
					>
						<button className='bg-yellow rounded-2xl py-1 px-8 font-semibold uppercase self-center md:self-end '>
							¡Quiero ser parte!
						</button>
					</Link>
				</div>
				<Image
					src={Airplane}
					alt='Avion volando'
					priority
					className='xsm:block md:hidden'
				/>
			</section>
		</div>
	);
};

export default Community;
