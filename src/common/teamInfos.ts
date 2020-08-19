const teamInfos: {
	[key: string]: {
		region: string;
		name: string;
		pop: number;
		colors: [string, string, string];
	};
} = {
	ATL: {
		region: "Atlanta",
		name: "Hawks",
		pop: 5.3,
		colors: ["#5c4a99", "#f0e81c", "#211e1e"],
	},
	BAL: {
		region: "Baltimore",
		name: "Bullets",
		pop: 2.7,
		colors: ["#7a1319", "#89bfd3", "#07364f"],
	},
	BOS: {
		region: "Boston",
		name: "Celtics",
		pop: 7.3,
		colors: ["#0d435e", "#f0494a", "#cccccc"],
	},
	BKN: {
		region: "Brooklyn",
		name: "Nets",
		pop: 21.5,
		colors: ["#034757", "#67c7e9", "#b78254"],
	},
	CHA: {
		region: "Charlotte",
		name: "Hornets",
		pop: 1.5,
		colors: ["#009e87", "#541f3e", "#ffffff"],
	},
	CHI: {
		region: "Chicago",
		name: "Bulls",
		pop: 9.1,
		colors: ["#ef670a", "#caeaf9", "#d3d3d3"],
	},
	CIN: {
		region: "Cincinnati",
		name: "Royals",
		pop: 1.6,
		colors: ["#000000", "#c11616", "#2966ef"],
	},
	CLE: {
		region: "Cleveland",
		name: "Cavaliers",
		pop: 1.7,
		colors: ["#211e1e", "#f8e3cc", "#3f1c59"],
	},
	DAL: {
		region: "Dallas",
		name: "Mavericks",
		pop: 6.6,
		colors: ["#be2026", "#2b2e81", "#ffffff"],
	},
	DEN: {
		region: "Denver",
		name: "Nuggets",
		pop: 2.7,
		colors: ["#216935", "#163a1c", "#a1d297"],
	},
	DET: {
		region: "Detroit",
		name: "Pistons",
		pop: 4.0,
		colors: ["#3a5eab", "#708fc7", "#0a1130"],
	},
	HOU: {
		region: "Houston",
		name: "Rockets",
		pop: 6.2,
		colors: ["#4c91c2", "#c4c4c3", "#ffffff"],
	},
	IND: {
		region: "Indianapolis",
		name: "Pacers",
		pop: 1.6,
		colors: ["#e79f02", "#00246d", "#ffffff"],
	},
	KC: {
		region: "Kansas City",
		name: "Kings",
		pop: 1.6,
		colors: ["#8f2100", "#ffb500", "#d4731c"],
	},
	LA: {
		region: "Los Angeles",
		name: "Clippers",
		pop: 15.6,
		colors: ["#6b6b6b", "#f15d24", "#dedddd"],
	},
	LAL: {
		region: "Los Angeles",
		name: "Lakers",
		pop: 15.6,
		colors: ["#00008b", "#ffaf28", "#ff24ee"],
	},
	LV: {
		region: "Las Vegas",
		name: "Knights",
		pop: 2.1,
		colors: ["#1c73bb", "#ffd600", "#0c5983"],
	},
	MEM: {
		region: "Memphis",
		name: "Grizzlies",
		pop: 1.3,
		colors: ["#ff6c49", "#000000", "#00aedc"],
	},
	MIA: {
		region: "Miami",
		name: "Heat",
		pop: 6.1,
		colors: ["#d8519d", "#4ac1c0", "#f15949"],
	},
	MIL: {
		region: "Milwaukee",
		name: "Bucks",
		pop: 1.5,
		colors: ["#003600", "#007800", "#fdc05f"],
	},
	MIN: {
		region: "Minnesota",
		name: "Timberwolves",
		pop: 2.8,
		colors: ["#3d2971", "#8accdc", "#ed9a22"],
	},
	MON: {
		region: "Montreal",
		name: "Alouettes",
		pop: 3.5,
		colors: ["#eac494", "#ed1d3d", "#f2b316"],
	},
	MXC: {
		region: "Mexico City",
		name: "Aztecs",
		pop: 20.5,
		colors: ["#1a9190", "#510f0f", "#eb5924"],
	},
	NOL: {
		region: "New Orleans",
		name: "Pelicans",
		pop: 1.1,
		colors: ["#195869", "#0e3e33", "#4edd61"],
	},
	NYC: {
		region: "New York",
		name: "Knicks",
		pop: 21.5,
		colors: ["#1e73ba", "#ff8500", "#ffffff"],
	},
	OKC: {
		region: "Oklahoma City",
		name: "Thunder",
		pop: 1.4,
		colors: ["#610000", "#bbb29e", "#e4dfcf"],
	},
	ORL: {
		region: "Orlando",
		name: "Magic",
		pop: 2.2,
		colors: ["#dc5000", "#000000", "#0b7648"],
	},
	PHI: {
		region: "Philadelphia",
		name: "76ers",
		pop: 5.5,
		colors: ["#bee6f6", "#ffe67b", "#3a3a3a"],
	},
	PHO: {
		region: "Phoenix",
		name: "Suns",
		pop: 4.3,
		colors: ["#d17d2a", "#231f20", "#c09867"],
	},
	PIT: {
		region: "Pittsburgh",
		name: "Steelers",
		pop: 1.7,
		colors: ["#fbee28", "#231f20", "#ffffff"],
	},
	POR: {
		region: "Portland",
		name: "Trail Blazers",
		pop: 2.0,
		colors: ["#e41d34", "#1e1e1e", "#e7a9cc"],
	},
	SA: {
		region: "San Antonio",
		name: "Spurs",
		pop: 2.0,
		colors: ["#4a2b14", "#30d9ff", "#704723"],
	},
	SAC: {
		region: "Sacramento",
		name: "Kings",
		pop: 1.8,
		colors: ["#e4c649", "#735823", "#f8e19f"],
	},
	SD: {
		region: "San Diego",
		name: "Clippers",
		pop: 4.7,
		colors: ["#231f20", "#ffffff", "#b2b3b3"],
	},
	SEA: {
		region: "Seattle",
		name: "SuperSonics",
		pop: 3.8,
		colors: ["#47ff47", "#000000", "#8f8f8f"],
	},
	SF: {
		region: "San Francisco",
		name: "Warriors",
		pop: 6.5,
		colors: ["#0e442e", "#d75f27", "#e7d3ae"],
	},
	STL: {
		region: "St. Louis",
		name: "Blues",
		pop: 2.2,
		colors: ["#c0c1c2", "#133cd1", "#3a3a3a"],
	},
	TOR: {
		region: "Toronto",
		name: "Raptors",
		pop: 6.6,
		colors: ["#832525", "#331b16", "#5e372c"],
	},
	TPA: {
		region: "Tampa Bay",
		name: "Lightning",
		pop: 2.7,
		colors: ["#17cc21", "#023a02", "#eb851e"],
	},
	UTA: {
		region: "Utah",
		name: "Jazz",
		pop: 2.3,
		colors: ["#4c4c4c", "#000000", "#aea57a"],
	},
	VAN: {
		region: "Vancouver",
		name: "Canucks",
		pop: 2.3,
		colors: ["#1ea194", "#213063", "#117568"],
	},
	WAS: {
		region: "Washington",
		name: "Wizards",
		pop: 6.2,
		colors: ["#213063", "#c5ae6e", "#ffffff"],
	},
};

teamInfos.LAC = teamInfos.LA;
teamInfos.GS = {
	...teamInfos.SF,
	region: "Golden State",
};

export default teamInfos;
