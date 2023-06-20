"use client";

import { EventCardContent } from "@/components/EventCardContent";
import { RingLoader } from "@/components/RingLoader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { db } from "@/firebase/config";
import { FilePayload, InitialPayload } from "@/utils/uploadToFirestore";
import { Timestamp, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export type EventCardData = InitialPayload & FilePayload;

export const EventCard = ({ id }: { id: string }) => {
  const [eventCardData, setEventCardData] = useState<EventCardData>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getEventCardData = async () => {
      let eventData: EventCardData = {
        eventName: "",
        description: "",
        eventDate: Timestamp.fromDate(new Date()),
        guestList: [],
        eventBanner: "",
        certificateTemplate: "",
      };
      setLoading(true);
      const docRef = doc(db, "events", id);
      const eventDoc = await getDoc(docRef);
      if (eventDoc.exists()) {
        eventData = {
          eventName: eventDoc.data().eventName || "",
          description: eventDoc.data().description || "",
          eventDate:
            eventDoc.data().eventDate || Timestamp.fromDate(new Date()),
          guestList: eventDoc.data().guestList || [],
          eventBanner: eventDoc.data().eventBanner || "",
          certificateTemplate: eventDoc.data().certificateTemplate || "",
        };
      }
      setEventCardData(eventData);
      setLoading(false);
    };
    getEventCardData();
  }, []);
  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <RingLoader />
      </div>
    );
  } else if (!loading && eventCardData?.eventName === "") {
    return (
      <>
        <div className="h-screen px-28">
          <div className="h-full w-full flex items-center justify-center">
            <Card className="w-96">
              <CardHeader>
                <CardTitle className="text-center">
                  Are you lost buddy?
                </CardTitle>
                <CardDescription className="text-center">
                  Seems like you entered the wrong URL.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center">Event does not exist.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-screen">
          <div
            style={
              {
                "--image-url": `url(${eventCardData?.eventBanner})`,
              } as React.CSSProperties
            }
            className="h-full bg-[image:var(--image-url)] bg-center bg-no-repeat bg-cover backdrop-filter"
          >
            <div className="h-full backdrop-blur-md">
              <div className="h-full px-28 w-full flex items-center justify-center">
                <Card className="w-96">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {eventCardData?.eventName}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {eventCardData !== undefined
                        ? new Date(
                            eventCardData.eventDate.seconds * 1000
                          ).toLocaleDateString()
                        : ""}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-5">
                    <EventCardContent
                      guestList={eventCardData?.guestList || []}
                      certificateTemplate={
                        eventCardData?.certificateTemplate || ""
                      }
                      eventName={eventCardData?.eventName || ""}
                      eventDate={
                        eventCardData?.eventDate ||
                        Timestamp.fromDate(new Date())
                      }
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
