import './homepage.css';
import { InfoCard } from './components/InfoCard';

export const HomePage = () => {
  return (
    <section className="home">
      <h2>Homepage</h2>
      <div className="featured-content">
        <InfoCard
          title={'Latest News'}
          description={'Stay updated with our newest features.'}
        />

        <InfoCard
          title={'Popular Articles'}
          description={'Check out our most popular articles.'}
        />
      </div>
    </section>
  );
};
