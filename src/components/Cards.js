import CardItem from './CardItem';
import './Cards.css'

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Lorem Ipsom"
                            label="Test"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Lorem Ipsom"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Lorem Ipsom"
                            label="Arash"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-9.jpg"
                            text="Lorem Ipsom"
                            label="Arash"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Lorem Ipsom"
                            label="Arash"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-3.jpg"
                            text="Lorem Ipsom"
                            label="Arash"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards