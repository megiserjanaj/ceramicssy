import "./styles.scss";
import image6 from "../../media/images/image6.jpg";

const About = () => {
  return (
    <div className="page--about">
      <div className="page--about--intro">
        <img src={image6} alt="" />
        <div>
          <h2>About US</h2>
          <p>
            Established in 2020 by Megi Serjanaj, Ceramicssy is a haven of
            tranquility and space for learning. Courses and taster classes are
            offered in hand building, sculpture, wheel throwing and decorating
            techniques. Studio membership is offered for more experienced
            artists.
          </p>
          <p>
            A specialist teacher of SEN and art therapy Zoe holds a Masters in
            Ceramics from the Royal College of Art in London and a Post Graduate
            Certificate in Education from the Institute of Education.
          </p>
          <p>
            Hothouse Award 2012 and exhibited in the Award at the British
            Ceramics Biennial (2017).
          </p>
          <div className="page--about--enroll--link">
            <a href="/enroll">Enroll now&nbsp;&rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
