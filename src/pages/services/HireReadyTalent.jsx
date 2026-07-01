import ServicePageLayout from "../../components/layout/ServicePageLayout";
import { SERVICES } from "../../data/servicesData";

const service = SERVICES.find((s) => s.slug === "hire-ready-talent");

export default function HireReadyTalent() {
  return <ServicePageLayout service={service} />;
}