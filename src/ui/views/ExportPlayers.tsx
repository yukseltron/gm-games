import React, { useCallback, useState } from "react";
import { PLAYER } from "../../common";
import useTitleBar from "../hooks/useTitleBar";
import { getCols, helpers, toWorker, downloadFile } from "../util";
import { DataTable, PlayerNameLabels, WatchBlock } from "../components";
import type { View } from "../../common/types";

const ExportPlayers = ({
	challengeNoRatings,
	players,
	season,
	startingSeason,
}: View<"exportPlayers">) => {
	const [exporting, setExporting] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | undefined>();
	const [selected, setSelected] = useState<
		{
			p: typeof players[number];
			season: number;
		}[]
	>([]);

	useTitleBar({
		title: "Export Players",
		dropdownView: "export_players",
		dropdownFields: { seasons: season },
	});

	const cols = getCols("Name", "Pos", "Age", "Team", "Ovr", "Pot", "");
	cols[0].width = "100%";

	const cols2 = getCols(
		"#",
		"Season",
		"Name",
		"Pos",
		"Age",
		"Team",
		"Ovr",
		"Pot",
	);
	cols[2].width = "100%";

	const commonRows = (p: typeof players[number]) => {
		const showRatings = !challengeNoRatings || p.tid === PLAYER.RETIRED;

		return [
			<PlayerNameLabels
				injury={p.injury}
				pid={p.pid}
				skills={p.ratings.skills}
				watch={p.watch}
			>
				{p.name}
			</PlayerNameLabels>,
			p.ratings.pos,
			p.age,
			<a
				href={helpers.leagueUrl([
					"roster",
					`${p.stats.abbrev}_${p.stats.tid}`,
					season,
				])}
			>
				{p.stats.abbrev}
			</a>,
			showRatings ? p.ratings.ovr : null,
			showRatings ? p.ratings.pot : null,
		];
	};

	const selectedPids = selected.map(({ p }) => p.pid);

	const rows = players.map(p => {
		return {
			key: p.pid,
			data: [
				...commonRows(p),
				<button
					className="btn btn-xs btn-primary"
					disabled={exporting || selectedPids.includes(p.pid)}
					onClick={() => {
						setSelected([...selected, { p, season }]);
					}}
					title="Add to list of players to export"
				>
					Add
				</button>,
			],
		};
	});

	const rows2 = selected.map(({ p, season }, i) => {
		return {
			key: p.pid,
			data: [i + 1, season, ...commonRows(p)],
		};
	});

	return (
		<>
			<p>
				Here you can export any number of players to a JSON file which can be
				imported into another league.
			</p>
			{season > startingSeason ? (
				<p>Players can be selected from any season using the menu above.</p>
			) : null}
			<p>
				When you export a player, it includes all of his seasons. Then when you
				import, you will be able to select whichever season you want, including
				the ability to select multiple seasons from the same player.
			</p>

			<button
				className="btn btn-primary mb-3"
				disabled={exporting || selectedPids.length === 0}
				onClick={async () => {
					setExporting(true);

					try {
						const { filename, json } = await toWorker(
							"main",
							"exportPlayers",
							selected.map(({ p, season }) => ({
								pid: p.pid,
								season,
							})),
						);

						downloadFile(filename, json, "application/json");
					} catch (error) {
						console.error(error);
						setErrorMessage(error.message);
					}

					setExporting(false);
				}}
			>
				Export Players
			</button>

			{errorMessage ? (
				<div>
					<div className="alert alert-danger d-inline-block">
						Error exporting players: {errorMessage}
					</div>
				</div>
			) : null}

			<div className="row">
				<div className="col-12 col-lg-6">
					<DataTable
						cols={cols}
						defaultSort={[0, "asc"]}
						name="ExportPlayers"
						pagination
						rows={rows}
					/>
				</div>
				<div className="col-12 col-lg-6">
					{rows2.length === 0 ? (
						<p>No players selected</p>
					) : (
						<DataTable
							cols={cols2}
							defaultSort={[0, "asc"]}
							name="ExportPlayers2"
							pagination
							rows={rows2}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default ExportPlayers;