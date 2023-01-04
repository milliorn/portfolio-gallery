// overlay text found on top of project hero pages
export default function ProjectHeroText(props: {
  h2: string;
  h3: string;
}): JSX.Element {
  const { h2, h3 } = props;
  return (
    <div className="absolute top-2/3 max-w-7xl w-full left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2">
      <h2 className="py-2">{h2}</h2>
      <h3>{h3}</h3>
    </div>
  );
}
