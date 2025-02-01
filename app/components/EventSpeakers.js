import React from "react";

const TeamMember = ({ name }) => (
  <div className="p-4 sm:p-6 w-full sm:w-auto border bg-white rounded-lg flex flex-col items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-16 hover:text-yellow-600"
    >
      <path
        fillRule="evenodd"
        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
    <h3 className="mt-4 text-sm sm:text-sm lg:text-sm font-bold text-gray-900">{name}</h3>
  </div>
);

const OurTeam = () => {
  const teamMembers = [
    { name: "Dr. Mansoor Ahmed & Mrs. Mansoor" },
    { name: "Mr. Jamal Nasir & Mrs. Noor Fatima Jamal" },
    { name: "Dr. Saqib Ilyas & Mrs. Hafsa Iftikhar" },
    { name: "Mr. Aaqib Khan & Mrs. Javeria Aaqib" },
    { name: "Mr. Tariq Raza & Mrs. Farhat Malik" },
  ];

  return (
    <section className="m-4 p-6 sm:py-12 bg-gray-50 max-w-full">
      <div className="px-4 sm:px-8 lg:px-12 text-left xl:text-center font-sans">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
          Meet our Team
        </h2>
        <p className="mt-4 text-base sm:text-base lg:text-lg text-gray-600 leading-relaxed">
          Our team is a dedicated group of professionals committed to delivering exceptional results.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center gap-6 mt-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;


