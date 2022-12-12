import "./styles.scss";

import headerVideo from "../../media/videos/production ID_4683409.mp4";
import Video from "../../components/video/Video";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <div className="page--home">
      <Video src={headerVideo} type="video/mp4" title="Ceramicssy" />
      <h1>Ceramicssy</h1>
      <div className="section">
        <div className="section--about">
          <Card
            title="About Us"
            text={[
              <p>
                Ceramicssy is an intimate, creative space accessible to anyone
                who shares a passion for clay and ceramics, from total beginners
                to professional artists.
              </p>,
              <p>
                Our mission is to create beautiful ceramics artwork and to
                cultivate a great sense of well-being and personal growth. And
                of course, one of the best rewards of practising with clay is
                that it's just plain fun.
              </p>,
            ]}
          >
            <a href="/about">More&nbsp;&rarr;</a>
          </Card>
        </div>
        <div className="section--gallery">
          <Card
            title="Gallery"
            text={[
              <p>
                Our classes and workshops are a creative journey through the
                medium of clay, covering techniques from hand building, throwing
                on a pottery wheel to glazing and firing.
              </p>,
              <p>
                At Ceramicssy you will learn how to join clay, press into
                plaster moulds to add relief onto plates, cups vases or whatever
                sparks your imagination.
              </p>,
            ]}
          >
            <a href="/gallery">More&nbsp;&rarr;</a>
          </Card>
        </div>
        <div className="section--contact">
          <Card
            title="Contact Us"
            text={[
              <div>
                <p>
                  We hold regular classes and workshops throughout the year for
                  students of all levels with an enthusiasm for ceramics and a
                  desire to develop and practice their skills.
                </p>
                <p>For more details, please contact us.</p>
              </div>,
            ]}
          >
            <a href="/contact">More&nbsp;&rarr;</a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
