import styles from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_DATA = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    }, {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty',
        price: 16.5,
    }, {
        id: 'm3',
        name: 'Barbeque Burger',
        description: 'American, Raw, Meaty',
        price: 12.99,
    }, {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy... and Green',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_DATA.map(meal =>
        <MealItem id={meal.id}
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}/>
    );

    return (
        <>
            <section className={styles.meals}>
                <Card>
                    <ul>{mealsList}</ul>
                </Card>
            </section>
        </>
    )
}

export default AvailableMeals;