import Link from 'next/link';
import Image from 'next/image';
import BackgroundImg from '@/public/images/letra-e-completa.png';

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className=''>
				<Image
					src={BackgroundImg}
					width={500}
					height={500}
					alt='Background Img'
					priority
					className='w-auto h-auto'
				/>
			</div>
			<div className='absolute'>
				<div className='flex items-center'>
					<h1 className='font-semibold text-4xl'>404</h1>
					<div className='border-solid border-l-2 h-11 mx-6 border-gray-700'></div>
					<p className='text-xl'>Página no encotrada.</p>
				</div>
				<div className='flex justify-center'>
					<Link href='/' className='py-5'>
						<button className='border-solid border-2 bg-darkBlue text-white rounded-3xl py-3 px-5 self-center md:self-end'>
							Volver al inicio
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
