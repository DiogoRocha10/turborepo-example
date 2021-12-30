import "./styles.css";

export const About = () => {
  return (
    <div>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://images.pexels.com/photos/7188095/pexels-photo-7188095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="atleta"
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>

          <p className="a-desc">
            In addition to technology, in my spare time I usually do some
            hobbies, one of them is football, which I've always been addicted
            to.
          </p>
          <div className="a-award">
            <img
              src="https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="futebol"
              className="a-award-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
