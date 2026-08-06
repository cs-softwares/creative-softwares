import { processSteps } from "../site-content";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function ProcessSection({
  eyebrow,
  title,
  description,
}: ProcessSectionProps) {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="process-shell mx-auto max-w-7xl rounded-[2.45rem] px-6 py-9 sm:px-8 sm:py-10 lg:px-10">
        <div className="process-intro">
          <p className="process-eyebrow">{eyebrow}</p>
          <h2 className="process-title">{title}</h2>
          <p className="process-description">{description}</p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.number} className="process-step mx-auto w-full text-left">
              <h3 className="process-step-heading">
                <span className="process-step-number">{step.number}</span>
                <span className="process-step-title">{step.title}</span>
              </h3>
              <p className="process-step-copy">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
