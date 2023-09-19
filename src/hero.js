
import { useState } from 'react';

const Hero = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="text-white hero-pattern mt-12">
      <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mt-36">
        <div className="max-w-xl mx-auto ml-8 lg:text-center">
          <h2
            className={`text-3xl font-bold sm:text-4xl mr-48 join ${
              show ? 'hidden' : ''
            }`}
          >
            *
            <span className={`joinn`} onClick={() => setShow(true)}>
              JOIN
            </span>
          </h2>

          <p
            className={`mr-56 text-left talent ${show ? '' : 'hidden'}`}
            onClick={() => setShow(false)}
          >
            ⚠️ We are looking for talented creative coders❕ We have open
            positions and they will be posted shortly. ‼️ submit your resume to
            apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
