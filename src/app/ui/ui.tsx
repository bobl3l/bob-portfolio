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
    <span key={n}>
      {n}
      <br></br>
    </span>
  ));
  return (
    <div className=" mx-auto max-w-[130vh] flex-col gap-6 px-4 py-6 sm:px-6 lg:px-12 text-2xl font-medium">
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
export function Projects({
  project,
  stack,
  des,
  gitlink,
  img,
}: {
  project: string;
  stack: string;
  des: string;
  gitlink: string;
  img: string;
}) {
  return (
    <div className="mx-auto max-w-[120vh] px-4 py-6 sm:px-6 my-10 lg:px-12 flex gap-4 justify-between items-start rounded-lg  bg-white bg-opacity-5 ">
      <div className="flex-col flex-1 gap-2 max-w-[88vh]">
        <div className="max-w-[88vh] flex justify-between items-center">
          <p className="text-xl">{project}</p>
          <LogoLink
            path="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
            link={gitlink}
          ></LogoLink>
        </div>
        <p className="text-purple-500">{stack}</p>
        <p>{des}</p>
      </div>
      <img className="rounded-md max-w-[20vh] " src={img}></img>
    </div>
  );
}

export function PortfolioCard({
  title,
  techStack,
  imageUrl,
  gifUrl,
  websiteUrl,
  description,
}: {
  title: string;
  techStack: string[];
  imageUrl: string;
  gifUrl?: string;
  websiteUrl: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group">
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-video">
          <img
            src={imageUrl}
            alt={title}
            className={`object-cover w-full h-full transition-opacity duration-300 
              ${gifUrl ? "group-hover:opacity-0" : ""}`}
          />

          {gifUrl && (
            <img
              src={gifUrl}
              alt={`${title} animation`}
              className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>

        <div className="p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>

          <p className="text-gray-300 text-sm md:text-base mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export function PortfolioGrid({
  projects,
}: {
  projects: Array<{
    title: string;
    techStack: string[];
    imageUrl: string;
    gifUrl?: string;
    websiteUrl: string;
    description: string;
  }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-[140vh] px-4 py-6">
      {projects.map((project) => (
        <PortfolioCard key={project.title} {...project} />
      ))}
    </div>
  );
}
