export default function Section({
  id,
  title,
  subtitle,
  children,
}) {
  return (
    <section id={id} className="py-28">

      <div className="container">

        {title && (
          <>
            <h2 className="section-title">
              {title}
            </h2>

            {subtitle && (
              <p className="section-subtitle mb-12">
                {subtitle}
              </p>
            )}
          </>
        )}

        {children}

      </div>

    </section>
  );
}