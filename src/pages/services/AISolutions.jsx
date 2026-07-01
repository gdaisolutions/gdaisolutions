import ServicePageLayout from "../../components/layout/ServicePageLayout";
import { SERVICES } from "../../data/servicesData";

const service = SERVICES.find((s) => s.slug === "ai-solutions");

export default function AISolutions() {
  return <ServicePageLayout service={service} />;
}