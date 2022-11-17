import Hero from "../../components/Hero/Hero";
import ecoHotelImg from "../../assets/img/ecoHotel.jpg";
import helicopter from "../../assets/img/ecoHotelOutside-helicopter.jpg";
import HeroContent from "./components/HeroContent";
const ecoHotel = {
	title: "ECO HOTEL",
	subTitle: "Tu mejor experiencia en Vaca Muerta",
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc lacus. Suspendisse semper diam nec porta ornare. Morbi id interdum risus. Maecenas laoreet magna tellus, in varius tellus congue sit amet. Vivamus condimentum quis magna id egestas. Morbi posuere quam urna, nec porta sem ultrices sed. Integer in hendrerit quam, vel iaculis nunc. Morbi ac diam sed lectus aliquam dictum. Nulla mauris tortor, condimentum eu augue quis, finibus pellentesque ante. In hac habitasse platea dictumst. Cras in eros venenatis, volutpat turpis nec, vestibulum nulla.`,
};
function Home() {
	return (
		<>
			<Hero img={ecoHotelImg} alt='Eco Hotel' bg='white' position='right'>
				<HeroContent
					title={ecoHotel.title}
					subTitle={ecoHotel.subTitle}
					description={ecoHotel.description}
					position='right'
				/>
			</Hero>
			<Hero
				img={helicopter}
				alt='Eco Hotel'
				bg='black'
				position='left'
			></Hero>
		</>
	);
}

export default Home;
