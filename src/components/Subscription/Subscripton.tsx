import SubscriptonCard from "./SubscriptonCard";

// Define the interface for SubscriptionCard
export interface Card {
  id: number;
  title: string;
  amount: number;
  subtitle: string;
  features: {
    [key: number]: string;
  };
  hoverColor: string;
}

const Card: Card[] = [
  {
    id: 1,
    title: "Basic",
    amount: 25,
    subtitle: "Essensital Package for regular workouts",
    features: {
      1: "unlimited access to the gym",
      2: "1 Free class per month",
      3: "Free access to the relaxation area",
    },
    hoverColor: "#2A2D34",
  },
  {
    id: 2,
    title: "Standard",
    amount: 50,
    subtitle: "Standard Package for regular workouts",
    features: {
      1: "unlimited access to the gym",
      2: "3 Free classes per month",
      3: "Free access to the relaxation area and souna",
    },
    hoverColor: "#3B3E45",
  },
  {
    id: 3,
    title: "Premium",
    amount: 75,
    subtitle: "Premium Package for dedicated fitness enthusiasts",
    features: {
      1: "unlimited access to the gym",
      2: "Unlimited classes per month",
      3: "Unlimited access to the relaxation area",
      4: "Personal training sessions",
    },
    hoverColor: "#4C4F56",
  },
];

const Subscripton = () => {
  return (
    <section className="bg-[#1A1D24] w-full min-h-screen text-white">
      <div className="px-5 py-10 md:px-10 lg:px-24 lg:py-16">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-orange-500 text-sm md:text-base">
            Subscriptions
          </h2>
          <h2 className="uppercase text-xl md:text-2xl lg:text-4xl font-bold">
            Flexible
            <span className="text-orange-500"> Plans</span> For Every Goal
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
      {Card.map((card) => (
        <SubscriptonCard key={card.id} card={card} />
      ))}
      </div>
    </section>
  );
};

export default Subscripton;
