import { Card, CardHeader, CardBody, Text, Image } from "@chakra-ui/react";
import GoldHeading from "../../../../components/Heading/GoldHeading";
function CustomCard(props) {
	const { icon, title, description } = props;
	return (
		<>
			<Card>
				<CardHeader>
					<Image
						src={icon}
						alt={title + "icon"}
						h='200px'
						w='200px'
					/>
					<GoldHeading title={title} />
				</CardHeader>
				<CardBody>
					<Text>{description}</Text>
				</CardBody>
			</Card>
		</>
	);
}

export default CustomCard;
