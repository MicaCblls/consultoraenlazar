import Image from 'next/image';
import BackgroundImg from '@/public/images/letra-e-completa.png';

const BePartOf = () => {
	return (
		<div className='flex justify-center items-center h-[34rem]'>
			<div className='absolute items-center'>
				<Image
					src={BackgroundImg}
					width={600}
					height={600}
					alt='Background Img'
					priority
					className='w-auto h-auto'
				/>
			</div>
			<div className='absolute items-center'>
				<h2 className='text-blue text-2xl text-center'>
					SÉ PARTE DEL <strong>FUTURO</strong> DEL
					<br />
					<strong className=''>CAPITAL HUMANO</strong>
				</h2>
			</div>
		</div>
	);
};

export default BePartOf;
