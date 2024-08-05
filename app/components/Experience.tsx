"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
	experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#fff",
				color: "#42376c",
			}}
			visible
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">

					<Image
						src={experience.icon}
						width={48}
						height={48}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<div>
					<h3 className="text-primary text-[24px] font-bold">{experience.title}</h3>
					<p
						className="text-secondary text-[16px] font-semibold"
						style={{ margin: 0 }}
					>
						{experience.company_name}
					</p>
				</div>

				<ul className="mt-5 list-disc ml-5 space-y-2">
					{experience.points.map((point, index) => (
						<li
							key={`experience-point-${index}`}
							className="text-secondary text-[14px] pl-1 tracking-wider"
						>
							{point}
						</li>
					))}

				</ul>
			</div>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="styles.sectionSubText text-center">
					What I have done so far
				</p>
				<h2 className="sectionHeadText text-center">Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="#42576C">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

const Svg = () => (
	<svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0 600 96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 96" height="96" width="600" data-type="color" role="img" aria-label="Shorthills AI brand logo">
		<g>
			<path fill="#FD6262" d="M41.91 95.724h69.405l-20.083-34.54-49.321 34.54Zm42.862-45.65L55.657 0 0 95.724h19.588l65.184-45.65Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path><path fill="#FD6262" d="M121.917 40.054V96h37.077V14.09l-37.077 25.964ZM156.336.276h-34.419V24.38L156.336.276Z" clip-rule="evenodd" fill-rule="evenodd" data-color="1"></path>

		</g>
	</svg>
)

export default SectionWrapper(Experience, "work");
