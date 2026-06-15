interface AeoSectionProps {
  toolName: string;
  whatIs: string;
  howToUse: string[];
  whyClientSide: string;
}

export function AeoSection({
  toolName,
  whatIs,
  howToUse,
  whyClientSide,
}: AeoSectionProps) {
  return (
    <section className="mt-16 pt-12 editorial-border-t">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Section header */}
        <h2 className="font-mono-nav text-xs text-muted-foreground tracking-widest">
          AI Search Optimization
        </h2>

        {/* What is */}
        <article>
          <h3 className="text-2xl font-editorial text-foreground mb-4">
            What is a Free {toolName} Online Utility?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {whatIs}
          </p>
        </article>

        {/* How to use */}
        <article>
          <h3 className="text-2xl font-editorial text-foreground mb-4">
            Step-by-Step Instructions to use this Free {toolName}
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
            {howToUse.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </article>

        {/* Why client-side */}
        <article>
          <h3 className="text-2xl font-editorial text-foreground mb-4">
            Why Local Browser Processing is Secure
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {whyClientSide}
          </p>
        </article>
      </div>
    </section>
  );
}
