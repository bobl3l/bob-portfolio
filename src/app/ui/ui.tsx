export function LogoLink({ path, link }: { path: string; link: string }) {
  return (
    <a href={link}>
      <svg
        className="w-7 md:w-10 hover:scale-105  "
        fill="grey"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    </a>
  );
}

export function Experience({
  company,
  duration,
  title,
  location,
  des,
}: {
  company: string;
  duration: string;
  title: string;
  location: string;
  des: Array<string>;
}) {
  const fulldes = des.map((n) => (
    <p>
      {n}
      <br></br>
    </p>
  ));
  return (
    <div
      className=" mx-auto max-w-[130vh] flex-col gap-6 px-4 py-6 sm:px-6 lg:px-12 text-2xl font-medium
px-4 py-6 sm:px-6 lg:px-12 text-2xl font-medium"
    >
      <div className="mx-auto flex pb-3 justify-between items-start ">
        <p className="text-purple-400">{company}</p>
        {duration}
      </div>

      <div className="mx-auto flex pb-3 justify-between items-start ">
        <p>{title}</p>
        {location}
      </div>
      <p className="font-light text-xl">{fulldes}</p>
    </div>
  );
}
