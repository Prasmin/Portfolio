import { educationDatas } from "@/lib/EducationData";

export const Education = () => {
  return (
    <div className="sm:max-w-4xl  mx-auto sm:py-32 py-22 ">
      <h2 className="flex justify-center text-2xl font-bold mb-8 ">
        Education & Training
      </h2>

      {/* Timeline Container */}
      <div className="relative left-2 border-l-2 border-blue-200 text-wrap">
        {educationDatas.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Timeline Bullet */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            </span>

            {/* Education Title */}
            <h3 className="text-lg font-semibold ">{item.title}</h3>

            {/* Institution & Period */}
            <div className="text-sm text-gray-500 mb-1">
              {item.institution}
              {item.location && ` – ${item.location}`}
              <span className="ml-2 text-xs text-gray-400">
                ({item.period})
              </span>
            </div>

            {/* Bullet Points */}
            <div className="list-disc ml-2 text-gray-700 text-sm sm:space-y-1 space-y-3 font-stretch-normal ">
              {item.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
