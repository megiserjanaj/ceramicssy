import "./styles.scss";
import Card from "../../components/card/Card";
import { enroll } from "../../enrollCard";
import image4 from "../../media/images/image4.jpg";

const Enroll = () => {
  return (
    <div className="page--enroll">
      <h2>Enroll now</h2>
      <img src={image4} alt="" className="page--enroll--parallax" />
      <div className="page--enroll--cards">
        {enroll.map(({ title, text, price, label, link, i }) => {
          return (
            <Card title={title} text={text} footnote={price} key={i}>
              <a href={link}>{label}&nbsp;&rarr;</a>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Enroll;
