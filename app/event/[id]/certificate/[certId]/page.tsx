import { CertificateVerifier } from "@/components/CertificateVerifier";

const Page = ({ params }: { params: { id: string; certId: string } }) => {
  return <CertificateVerifier id={params.id} certId={params.certId} />;
};

export default Page;
