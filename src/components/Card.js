import { Card, Heading, Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AppCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card borderRadius="xl">
      <Image src={imageSrc} borderRadius="xl" mb="6" />

      <Box m="4">
        <Box mb="3">
          <Heading size="md">{title}</Heading>
        </Box>

        <Box mb="3" color="gray.500">
          <Text>{description}</Text>
        </Box>

        <Box display="flex" alignItems="center">
          <Text mr="2" fontSize="sm">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </Box>
      </Box>
    </Card>
  );
};

export default AppCard;
