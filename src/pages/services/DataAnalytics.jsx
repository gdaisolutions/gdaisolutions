import ServicePageLayout from "../../components/layout/ServicePageLayout";
import { SERVICES } from "../../data/servicesData";

const service = SERVICES.find((s) => s.slug === "data-analytics");

export default function DataAnalytics() {
  return <ServicePageLayout service={service} />;
}