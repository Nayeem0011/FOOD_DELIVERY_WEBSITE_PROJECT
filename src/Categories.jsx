import { MdOutlineDensitySmall } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <MdOutlineDensitySmall className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 3,
    name: "soups",
    icon: <LuSoup className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "main_course",
    icon: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
  },
];

export default Categories;
