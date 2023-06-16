type LinkedInShareUrlProps = {
  orgName: string;
  certTitle: string;
  certYear: number;
  certMonth: number;
  certURL: string;
  certId: string;
};

export const generateLinkedInShareURL = ({
  orgName,
  certTitle,
  certYear,
  certMonth,
  certURL,
  certId,
}: LinkedInShareUrlProps) => {
  const linkedInShareUrl = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&organizationName=${encodeURIComponent(
    orgName
  )}&name=${encodeURIComponent(
    certTitle
  )}&issueYear=${certYear}&issueMonth=${certMonth}&certUrl=${encodeURIComponent(
    certURL
  )}&certId=${certId}`;

  return linkedInShareUrl;
};
