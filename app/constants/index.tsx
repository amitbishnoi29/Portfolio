export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Front End Developer",
		icon: "/web.webp",
	},
	{
		title: "ReactJs/NextJs Developer",
		icon: "/mobile.webp",
	},
	{
		title: "React Native Developer",
		icon: "/backend.webp",
	},
	// {
	// 	title: "Frontend Engineer",	
	// 	icon: "/creator.webp",
	// },
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];
const experiences = [
	{
		title: "Software Developer - Frontend",
		company_name: "SHORTHILLS AI",
		icon: "/company/shorthills_ai.png",
		iconBg: "#383E56",
		date: "Oct. 2023 – Present",
		points: [
			"Developed frontend using Next.js 14 for advanced AI tools like DocLens and ChatScribe.",
			"Implemented authentication mechanisms, including secure login and session management, and used middleware to authenticate routes, protecting user data and maintaining application integrity.",
			"Utilized server-side rendering (SSR) to optimize page load times and enhance SEO.",
			"Collaborated with the UI/UX design team to ensure design consistency and functionality. Converted Figma designs to pixel-perfect code.",
			"Designed and implemented the user interface using Figma designs for a comprehensive Dealership Management Application using React.",
			"Structured the application following best practices for file organization and modularity, enhancing code readability and maintainability.",
			"Created a Portfolio Builder section allowing users to search and select dealerships based on radius, state, and brand.",
			"Integrated Leaflet maps into the application, customizing markers to visually represent dealership locations.",
		],
	},
	{
		title: "Project Engineer",
		company_name: "WIPRO LIMITED",
		icon: "/company/Wipro.svg",
		iconBg: "#E6DEDD",
		date: "Mar. 2021 – Oct. 2023",
		points: [
			"Contributed in developing new features and functionality using Storybook Library.",
			"Participated in code review, debugging, sprint planning, working collaboratively with a cross-disciplinary product team in Agile methodology.",
			"Promoted best code practices, quick bug fixes and influenced clients with timely delivery of tasks.",
			"Integrated frontend components with RESTful APIs to enable seamless communication between frontend and backend system.",
			"Assisted in troubleshooting and resolving front-end issues reported by users or the QA team.",
		],
	},
];


const testimonials = [
	{
		id: 1,
		testimonial:
			"CodeChef is an online educational and competitive programming platform. It began as an educational initiative in 2009 by Directi, an Indian software company.",
		name: "Amit Bishnoi",
		image: "/socialmedia/behance.svg",
		link: "https://www.codechef.com/users/amitbishnoi",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Amit Bishnoi",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/amit--bishnoi/",
	},
	
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Amit Bishnoi",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Amit Bishnoi",
		image: "/tech/github.png",
		link: "https://github.com/amitbishnoi29",
	},
];

const projects = [
	{
		name: "FinTech - Revoult Clone",
		description:
			"Developed a cross-platform React Native FinTech app inspired by Revolut, featuring secure SMS OTP authentication via Clerk and dynamic data visualization with Victory Native XL charts. Utilized Zustand and MMKV for state management and Expo Router for streamlined navigation.",
		tags: [
			{
				name: "react native",
				color: "blue-text-gradient",
			},
			{
				name: "expo",
				color: "pink-text-gradient",
			},
			{
				name: "clerk",
				color: "orange-text-gradient",
			},
			{
				name: "victory native",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/Fintech.webp",
		source_code_link:
			"https://github.com/amitbishnoi29/Fintech",
		netlify_link: "https://github.com/amitbishnoi29/Fintech",
	},
	{
		name: "IMDB Clone",
		description:
			"A responsive IMDB clone using React, Redux toolkit, and Axios, featuring a detailed movie information page and search functionality for movies, TV shows, and celebrities.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "redux toolkit",
				color: "pink-text-gradient",
			},
			{
				name: "axios",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/Fintech.webp",
		source_code_link:
			"https://github.com/amitbishnoi29/Fintech",
		netlify_link: "https://github.com/amitbishnoi29/Fintech",
	},
	{
		name: "Cryptoverse",
		description: "A samll responsive web app with ReactJs and Redux toolkit which display list of cryptocurrencies, News Feed , Crypto Details and Charts with Rapid API",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "green-text-gradient",
			},
			{
				name: "ant-d",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/cryptoverse.webp",
		source_code_link: "https://github.com/amitbishnoi29",
		netlify_link: "https://cryptoverse2023.netlify.app/",
	},
	{
		name: "U-Cinema - A Youtube Clone",
		description:
			"U-Cinema is a YouTube clone project built with React, Material UI, and Tailwind CSS. The platform has been designed with a stunning dark mode that enhances the viewing experience. The user interface is intuitive and easy to navigate, ensuring that users can easily find the content they're looking for.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "rapidapi",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/u-cinema.webp",
		source_code_link: "https://github.com/amitbishnoi29",
		netlify_link: "https://u-cinema.netlify.app/",
	},
	{
		name: "Monday.com Clone",
		description:
			"A Monday.com clone built using HTML and CSS.",
		tags: [
			{
				name: "Html",
				color: "blue-text-gradient",
			},
			{
				name: "Css",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/monday.webp",
		source_code_link: "https://github.com/amitbishnoi29",
		netlify_link: "https://amitbishnoi.netlify.app/",
	},
	{
		name: "Portfolio",
		description:
			"A responsive Portfolio website which is made using Next.Js a cross-browser JavaScript library.It has a beautiful interface made using Tailwind CSS and React.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/portfolio.webp",
		source_code_link: "https://github.com/omunite215/portfolio",
		netlify_link: "https://portfoliobyompatel.netlify.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
