import ServicePageLayout from "../../components/layout/ServicePageLayout";
import { SERVICES } from "../../data/servicesData";

const service = SERVICES.find((s) => s.slug === "digital-marketing");

export default function DigitalMarketing() {
  return <ServicePageLayout service={service} />;
}