import React from 'react';
import './Landing.scss';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Buttons } from '../../Components/Buttons/Buttons';
import Input from '../../Components/Input/input';
import Divider from '../../Components/Divider/Divider';
import tv from '../../Assets/images/tv.png';
import mobile from '../../Assets/images/mobile.jpeg';
import stranger from '../../Assets/images/stranger-album.png';
import kidimage from '../../Assets/images/kid-image.png';
import CollapsibleItem from '../../Components/Collapse/Collapse';

function Landing() {
  const freqquest = [
    {
      title: 'What is Netflix?',
      content:
        'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial -all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!',
    },
    {
      title: 'How much does Netflix cost?',
      content:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦4,400 to ₦1,200 a month. No extra costs, no contracts.',
    },
    {
      title: 'Where can I watch?',
      content:
        'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.',
    },
    {
      title: 'How do I cancel?',
      content:
        'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      title: 'What can I watch on Netflix?',
      content:
        'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      title: 'Is Netflix good for kids?',
      content:
        'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
    },
  ];
  return (
    <div className="landing-page">
      <section className="herosection">
        <div className="light-bg">
          <Navbar />
          <div className="container">
            <div className="content">
              <div className="text">
                <h2 className="welcome_note">
                  Unlimited movies, TV shows, and more
                </h2>
                <h5 className="second_text">Watch anywhere. Cancel anytime.</h5>
                <h5 className="third_text">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h5>
              </div>

              <div className="input-group">
                <div className="input">
                  <Input placeholder="Peter" />
                </div>
                <div className="button">
                  <Buttons title="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="ad-section">
        <div className="inner-ad-section">
          <div className="text-section">
            <h2>Enjoy on your TV</h2>
            <h5>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h5>
          </div>
          <div className="image-section">
            <img src={tv} alt="tv-frame" />
          </div>
        </div>
      </section>
      <Divider />
      <section className="download-section">
        <div className="inner-download-section">
          <div className="text-section">
            <h2>Download your shows to watch offline</h2>
            <h5>
              Save your favorites easily and always have something to watch.
            </h5>
          </div>
          <div className="image-section">
            <img src={mobile} alt="tv-frame" />

            <div className="movie-ad">
              <div className="inner-container">
                <div className="movie-album">
                  <img src={stranger} alt="" srcSet="" />
                </div>
                <div className="movie-text">
                  <div className="text-container">
                    <h4>Stranger Things</h4>
                    <h6>Downloading...</h6>
                  </div>
                  <div className="icon-container">
                    <div
                      data-uia="nmhp-card-animation-asset-custom"
                      aria-hidden="true"
                      className="default-ltr-cache-1q4up1i e15c37ii5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />

      <section className="watch-section">
        <div className="inner-watch-section">
          <div className="text-section">
            <h2>Watch everywhere</h2>
            <h5>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h5>
          </div>
        </div>
      </section>
      <Divider />

      <section className="create-profile">
        <div className="inner-section">
          <div className="text-section">
            <h2>Create profiles for kids</h2>
            <h5>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h5>
          </div>
          <div className="image-section">
            <img src={kidimage} alt="tv-frame" />
          </div>
        </div>
      </section>
      <Divider />
      <section className="frequently-ask-quest">
        <div className="inner-section">
          <h2 className="header">Frequently Asked Questions</h2>
          {freqquest.map((item) => (
            <CollapsibleItem key={item.title} title={item.title}>
              {item.content}
            </CollapsibleItem>
          ))}
          <div className="subscription">
            <div className="inner-container">
              <h2>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h2>
              <div className="form">
                <div className="input-container">
                  <Input placeholder="Email Address" bordercolor="green" />
                </div>
                <div className="button-container">
                  <Buttons title="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>Hello world</h1>
      <Footer />
    </div>
  );
}

export default Landing;
