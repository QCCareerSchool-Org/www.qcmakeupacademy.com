import type { NextPage } from 'next';

import { DefaultLayout } from '../components/DefaultLayout';
import { SEO } from '../components/SEO';

const Home: NextPage = () => (
  <DefaultLayout>
    <SEO title="QC Makeup Academy" description="" canonical="/" />

    <section id="first-section" className="text-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-7 offset-md-1">
            <p className="hat">QC Career School</p>
            <h1 className="text-shadow">Providing Quality Distance Education for 35 Years and Counting</h1>
          </div>
        </div>
      </div>
    </section>

    <style>{`
      #first-section {
        background: linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(${require('../images/backgrounds/hero-home.jpg?webp')}) 0 0;
        background-size: cover;
      }
    `}</style>
  </DefaultLayout>
);

export default Home;
