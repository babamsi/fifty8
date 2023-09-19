import Hero from './hero';
import Footer from './footer';
import axios from 'axios';
import { useState } from 'react';
import sketch from './sketch';
import { ReactP5Wrapper } from "@p5-wrapper/react";

function App() {
  const [city, setCity] = useState('');
  // const [time, setTime] = useState('');
  axios
    .get(
      'https://ipgeolocation.abstractapi.com/v1/?api_key=4463ec8cc62c471ea50b4f7cb8beb11f'
    )
    .then((response) => {
      setCity(response.data.city + ', ' + response.data.country);
    })
    .catch((error) => {
      console.log(error);
    });

  const today = new Date();
  const times = today.getHours() + ':' + today.getMinutes();
  let ss;
  if (times >= 12) {
    ss = times + ' PM';
  } else {
    ss = times + ' AM';
  }
  console.log(ss);

  return (
    <main className="h-[103vh]">
      <ReactP5Wrapper sketch={sketch} />
      <header>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <p className="block mt-8 text-white hanoi" href="/">
                {city.toUpperCase()} <br />
                <span className="time">{ss} [GMT + 5]</span>
              </p>
            </div>

            <div className="flex items-center gap-1">
              <div className="sm:flex sm:gap-4 building">
                <p
                  className="rounded-md px-5 py-2.5 text-white shadow mt-8"
                  href="/"
                >
                  🛠️ BUILDING....
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Hero />
      <Footer />
    </main>
  );
}

export default App;