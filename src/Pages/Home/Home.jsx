import Hero from "../../components/Hero/Hero";
import ecoHotelImg from "../../assets/img/ecoHotel.jpg";
import HeroContent from "./components/HeroContent";
import ValueProposal from "./components/ValueProposal/ValueProposal";
import Paths from "../../data/paths.json";
const ecoHotel = {
	title: "ECO HOTEL",
	subTitle: "Tu mejor experiencia en Vaca Muerta",
	description: `Añelo es la ciudad neuquina sobre la que están puestos los ojos del mundo. Es considerada la capital de Vaca Muerta, la reserva de gas y petróleo no convencional más grande la Argentina y la segunda a nivel mundial.`,
};
function Home() {
	const { ourServices, gallery, location, contact } = Paths;
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
			{/* <Hero img={ecoHotelImg} alt='Eco Hotel' bg='white' position='left'>
				<HeroContent
					title={ecoHotel.title}
					subTitle={ecoHotel.subTitle}
					description={ecoHotel.description}
					position='left'
				/>
			</Hero> */}
			<section id={ourServices.id}>
				<ValueProposal />
			</section>
		</>
	);
}

export default Home;
