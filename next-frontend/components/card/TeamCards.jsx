import React from 'react';
import MemberCard from "./MemberCard";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const TeamCards = ( props ) => {
	const [ team, setTeam ] = React.useState()
	React.useEffect(() => {
	  setTeam(props.team.sort(() => Math.random() - 0.5))
	}, [])
	return (
		<div className='bg-blue flex justify-center'>
			<div className='flex flex-wrap w-9/12 sm:justify-center lg:justify-start lg:py-12'>
				<div className='lg:pb-20 flex self-start'>
					<h3 className=' py-12 text-2xl md:text-3xl text-left font-bold text-ellipsis opacity-90 text-yellow'>
						Conoce a nuestro gran equipo...
					</h3>
				</div>
				<div className="flex justify-center w-screen">
					<div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 xsm:grid-cols-1 pb-12'>
						{!team
							? Array.from(new Array(6)).map((item, index) => (
									<Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
										<Skeleton variant='rectangular' width={210} height={200} />
										<Box sx={{ pt: 0.5 }}>
											<Skeleton />
											<Skeleton width='60%' />
										</Box>
									</Box>
							  ))
							: team.map((member, index) => (
									<MemberCard
										key={member._id}
										image={member.photo}
										name={member.name}
										jobTitle={member.jobTitle}
									></MemberCard>
							  ))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCards;
