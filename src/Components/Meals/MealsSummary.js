import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return <section className={styles.summary}>
        <h2>Delicious Food Catered to you!</h2>
        <p>
            Choose your favorite meal from our broad selection, and enjoy
            a delicious meal at your next event.
        </p>
        <p>
            All of our meals are cooked with fresh, high-quality ingredients,
            just in time and by our experienced chefs.
        </p>
    </section>
}

export default MealsSummary;