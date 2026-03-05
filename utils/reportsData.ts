import { cover } from "@/assets";

export interface ReportItem {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	image: any;
	pdf: string;
	tag?: string;
	details?: string;
}

export const REPORTS: ReportItem[] = [
	{
		id: "feb-2026",
		title:
			"HOW CAPITAL FLOWS THROUGH AFRICAN ENTERPRISES AND WHERE IT BREAKS DOWN",
		subtitle: "Comprehensive Analysis of Global Business Trends",
		description:
			"Our exclusive report decoding the global economy, proprietary data, market analysis, and strategic forecasting for the leaders shaping tomorrow.",
		image: cover,
		pdf: "/feb_report_b360.pdf",
		tag: "Featured",
		details:
			"This comprehensive report provides an in-depth look at the state of the business ecosystem in February 2026. It highlights key market shifts, analyzes major shifts in the startup landscape, and offers an outlook on emerging sectors such as Fintech 2.0 and AI Policy.",
	},
];
