export default function LogoLink({
  path,
  link,
}: {
  path: string;
  link: string;
}) {
  return (
    <a href={link}>
      <svg
        className=" hover:text-white"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d={path} />
      </svg>
    </a>
  );
}
