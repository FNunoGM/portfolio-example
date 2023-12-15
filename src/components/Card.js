import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      p={4}
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.200"
      boxShadow="md"
      bg="white"
      w="100%"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2} align="start" w="100%">
        <Heading as="h2" size="md" color="black">
          {title}
        </Heading>
        <Text color="gray">{description}</Text>
      </VStack>
      <HStack justify="space-between" w="100%">
        <VStack align="start" spacing={1}>
          <Text fontSize="sm" color="gray">
            Read more{" "}
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="#3182ce" />
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Card;
