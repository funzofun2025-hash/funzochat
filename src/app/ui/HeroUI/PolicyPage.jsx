function PolicyPage({ policyData }) {
  const { title, lastUpdated, companyName, email, intro, sections } =
    policyData;
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-center text-3xl lg:text-5xl">{title}</h1>
      <div className="mt-7 flex flex-col gap-6">
        <div>
          <p className="font-bold">Last Updated:</p>
          <p>{lastUpdated}</p>
        </div>

        <div>
          <strong className="text-xl">Intro</strong>
          <p>{intro}</p>
        </div>
        {sections.map(({ id, title, content }) => (
          <div key={id} className="flex flex-col gap-4">
            <p className="text-xl font-bold">{title}</p>
            {content.map((paragraph, index) => (
              <div
                key={index}
                // dangerous HTML needed for bolding tags <strong> in data
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="text-base"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default PolicyPage;
