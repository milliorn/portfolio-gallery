import { RiRadioButtonFill } from "react-icons/ri";

export default function TechStack(props: { data: readonly string[] }): JSX.Element {
  const { data } = props;

  return (
    <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
      <div className="p-2">
        <p className="text-center font-bold pb-2">Tech Stacks</p>
        <div className="grid grid-cols-2 md:grid-cols-1 text-sm lg:text-base">
          {data.map((e) => (
            <p key={e} className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1 mr-1" />
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
