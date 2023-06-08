"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Event } from "@/components/ui/columns";
import { ReactNode } from "react";

type EventDataContextType = {
  eventData: Event[];
  loading: boolean;
};

const EventDataContext = createContext<EventDataContextType>({
  eventData: [],
  loading: false,
});

export const EventDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const q = query(collection(db, "events"), orderBy("eventDate", "desc"));
    const unsubscribe = onSnapshot(q, (snap) => {
      setLoading(true);
      const data: Event[] = snap.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().eventName,
        date: doc.data().eventDate,
        description: doc.data().description,
        guests: doc.data().guestList.length,
      }));
      setEventData(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <EventDataContext.Provider value={{ eventData, loading }}>
      {children}
    </EventDataContext.Provider>
  );
};

export const EventData = () => {
  return useContext(EventDataContext);
};
