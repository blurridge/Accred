import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Linkedin, PaintBucket, ScrollText, Zap } from "lucide-react";

export const FeatureCards = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="flex flex-col gap-2">
          <Card className="w-96 hover:bg-gray-200 dark:hover:bg-gray-900">
            <CardHeader className="gap-3 flex items-center">
              <div className="flex flex-col justify-center">
                <Zap size={48} className="mx-auto" />
              </div>
              <CardTitle>Instant Certificate Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Generate professional certificates on demand, saving time and
                effort.
              </p>
            </CardContent>
          </Card>
          <Card className="w-96 hover:bg-gray-200 dark:hover:bg-gray-900">
            <CardHeader className="gap-3 flex items-center">
              <CardTitle>Seamless Data Import</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Import participant data from CSV files for quick certificate
                generation.
              </p>
            </CardContent>
          </Card>
          <Card className="w-96 hover:bg-gray-200 dark:hover:bg-gray-900">
            <CardHeader className="gap-3 flex items-center">
              <div className="flex flex-col justify-center">
                <ScrollText size={48} className="mx-auto" />
              </div>
              <CardTitle>Secure Participant Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Validate participants against the guest list to ensure only
                valid guests receive certificates.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-2">
          <Card className="w-96 hover:bg-gray-200 dark:hover:bg-gray-900">
            <CardHeader className="gap-3 flex items-center">
              <div className="flex flex-col justify-center">
                <PaintBucket size={48} className="mx-auto" />
              </div>
              <CardTitle>Customizable Event Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Each event gets its dedicated webpage to access and view
                certificates.
              </p>
            </CardContent>
          </Card>
          <Card className="w-96 hover:bg-gray-200 dark:hover:bg-gray-900">
            <CardHeader className="gap-3 flex items-center">
              <div className="flex flex-col justify-center">
                <Linkedin size={48} className="mx-auto" />
              </div>
              <CardTitle>LinkedIn Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Enable participants to add their certificates to LinkedIn,
                enhancing their credentials.
              </p>
            </CardContent>
          </Card>
          <Card className="w-96 hover:bg-gray-200 dark:hover:bg-gray-900">
            <CardHeader className="gap-3 flex items-center">
              <CardTitle>Bug Reporting and Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Alpha-stage app with a direct channel for reporting bugs and
                contacting the developer for assistance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
