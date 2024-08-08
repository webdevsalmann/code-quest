import Section from "@/components/ui/section";
import FormBox from "./form";

export default function Contact({ className, heading, subTitle }) {
    return (
        <Section className={className}>
            <div className="section-wrapper relative grid md:grid-cols-2 gap-block">
                <div className="">
                    <h2 className="text-left">
                        {heading ? heading : "Get In Touch"}
                    </h2>

                    <p className="mb-base">
                        {subTitle || 'Reach out to us for any inquiries or assistance'}
                    </p>

                    <FormBox />
                </div>

                {/* Add Section */}
            </div>
        </Section >
    )
}
