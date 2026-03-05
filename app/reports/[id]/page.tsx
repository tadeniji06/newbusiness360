import { REPORTS } from "@/utils/reportsData";
import { notFound } from "next/navigation";
import ReportDetail from "./ReportDetail";

interface Props {
	params: {
		id: string;
	};
}

export async function generateStaticParams() {
	return REPORTS.map((report) => ({
		id: report.id,
	}));
}

export function generateMetadata({ params }: Props) {
	const report = REPORTS.find((r) => r.id === params.id);

	if (!report) {
		return {
			title: "Report Not Found",
		};
	}

	return {
		title: `${report.title} | Business360 Reports`,
		description: report.description,
	};
}

export default async function ReportPage({ params }: Props) {
	const { id } = await params;
	const report = REPORTS.find((r) => r.id === id);

	if (!report) {
		notFound();
	}

	return (
		<main className='min-h-screen bg-gray-50 pt-24 pb-16'>
			<ReportDetail report={report} />
		</main>
	);
}
