type LinkedInShareUrlProps = {
  orgName: string;
  certTitle: string;
  certYear: number;
  certMonth: number;
};

export const generateLinkedInShareURL = ({
  orgName,
  certTitle,
  certYear,
  certMonth
}: LinkedInShareUrlProps) => {
  const linkedInShareUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&organizationName=${encodeURIComponent(
    orgName
  )}&name=${encodeURIComponent(
    certTitle
  )}&issueYear=${certYear}&issueMonth=${certMonth}`;

  return linkedInShareUrl;
};
