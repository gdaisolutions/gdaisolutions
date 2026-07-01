import ServicePageLayout from "../../components/layout/ServicePageLayout";
import { SERVICES } from "../../data/servicesData";

const service = SERVICES.find((s) => s.slug === "software-services");

export default function Software() {
  return <ServicePageLayout service={service} />;
}