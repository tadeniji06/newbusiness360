import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us - Business360",
	description:
		"Get in touch with Business360 regarding partnerships, inquiries, or general questions. We are here to help you redefine business media.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
