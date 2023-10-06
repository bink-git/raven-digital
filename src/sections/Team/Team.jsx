import Title from "../../components/Title";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { team } from "../../data";

const Team = () => {
  return (
    <div className="about container-2xl mx-auto w-full max-w-screen-2xl ">
      <Title className="text-left">Our team</Title>
      <div className="mb-[150px] grid grid-cols-12 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative col-span-3 w-[340px] cursor-pointer"
          >
            <img
              src={member.img}
              alt="photo"
              className="group-hover:rotate-y-180 h-full w-full rounded-lg object-cover transition-all duration-1000 ease-in-out group-hover:opacity-0"
            />
            <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col justify-between rounded-lg bg-secondary px-8 pb-[74px] pt-14 text-center">
              <div>
                <p className="mb-4 text-2xl font-medium">{member.name}</p>
                <p className="text-lg font-medium">{member.position}</p>
              </div>
              <p className="text-lg font-light">{member.text}</p>
              <div className="flex items-center justify-between px-24">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
