import Card from "./Card";
import SidebarLink from "@/components/SideBarLink"

const links = [
  { 
    label: "Home", 
    icon: "Grid", 
    link: "/home" 
  },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", 
    icon: "User", 
    link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap mr-7">
      <div className="w-full flex justify-center items-center border-solid border-b-4 border-gray-800">
        <div className=" text-3xl justify-center items-center text-center"> <p> Habitrack </p> </div>
      </div>
      {links.map((link) => (
        // eslint-disable-next-line react/jsx-key
        <SidebarLink link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
