import { EventCard } from "@/components/EventCard";

const Page = ({ params }: { params: { id: string } }) => {
  return <EventCard id={params.id} />;
};

export default Page;
