import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "./Subscripton";

interface SubscriptionCardProps {
  card: Card;
}

const SubscriptonCard = ({ card }: SubscriptionCardProps) => {
  return (
    <>
      <div
        className={`w-80 h-[28rem] rounded-xl hover:shadow-lg border-2 py-4 px-4 relative group cursor-pointer hover:shadow-orange-200/10 card duration-500 ease-in`}
      >
        <h2 className="text-center text-2xl font-bold py-5">
          {card.title} <span className="text-orange-500">.</span>{" "}
        </h2>
        <p>
          <span className="font-bold text-lg text-orange-500 py-1">$25</span>
          /month
        </p>
        <p className="text-xs">{card.subtitle}</p>
        <div>
          <span className="pt-4 px-2 text-base  text-start">Features:</span>
          <ul className="py-2 text-sm">
            {Object.values(card.features).map((feature, index) => (
              <li key={index} className="py-2">
                <p>✅{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-2 px-5">
          <Button
            className={`w-52 h-10 group-hover:bg-orange-500 bg-opacity-0 transition duration-300`}
          >
            Get Started{" "}
            <ArrowUpRight className="group-hover:translate-y-[-3px] group-hover:translate-x-[3px] duration-500 ease-in transition-transform" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default SubscriptonCard;
