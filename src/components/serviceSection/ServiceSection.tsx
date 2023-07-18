import { service } from "@/mocks/service";
import ServiceItem from "../serviceItem";

const ServiceSection = () => {
  return (
    <div>
      {service?.map((service) => (
        <ServiceItem data={service} key={service.id} />
      ))}
    </div>
  );
};
export default ServiceSection;
