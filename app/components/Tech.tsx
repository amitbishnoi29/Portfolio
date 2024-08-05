"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";
import Image from "next/image";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-20">
			{technologies.map((technology) => (
				<div key={technology.name}>
					{/* <BallCanvas icon={technology.icon} /> */}
					<Image src={technology.icon}
						alt="icon"
						width={100} height={100}
					/>
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
