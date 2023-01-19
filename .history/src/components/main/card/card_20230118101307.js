import MediaCard from "./mediacard";
import first from "../../../assets/imageone.png";
import second from "../../../assets/imagetwo.png"
import three from "../../../assets/imagethree.png"
import four from "../../../assets/imagefour.png"
import five from "../../../assets/imagefive.png"

import { Box, Grid } from "@mui/material";

const mediaCards = [
  {
    image: { first },
    title: "Tech incubation",
    description: `Simplify9's tech incubation services offer a helping, guiding hand. To achieve successful incubation of concepts, and move them along the pathway from ideas to market-sweeping products, a variety of services will be provided.`
  },
  {
    image: { second },
    title: "Technology Consulting",
    description: `Simplify9’s experienced team provides a broad range of management and IT consulting services focused on our clients’ most critical issues and opportunities.`
  },
  {
    image: { three },
    title: "Development",
    description: ` Simplify9 offers fully customized software solutions that are aimed at designing, engineering, supporting, and evolving various software types. Our solutions are industry-tailored for a diverse set of business entities ranging from enterprises to start-up companies.`
  },
  {
    image: { four },
    title: "Outsourcing teams",
    description: `We provide outsourcing services that promote not only the outstanding quality of your development requirements but also allow entities to focus on their core competencies, keeping the long-term strategic priorities on the right track while delegating the elbow grease Simplify9's outsourced teams.`
  },
  {
    image: { five },
    title: "System integrations",
    description: `We provide middleware to enable the communication between different systems written in different language and based on different platforms through several protocols not only to share data but also share the services.`
  }
];

export default function Cards() {
  return (

      <Grid container item xs={10} gap='1rem' xs="6" md="4" justifyContent={"center"} alignContent="center" >
        {mediaCards.map((mediaCard, i) => {
          return (
            <Grid key={`${i}-${mediaCard?.title}`} item container xs={12} md={3}>
              <MediaCard {...mediaCard} />
            </Grid>
          );
        })}
      </Grid>
  );
}
