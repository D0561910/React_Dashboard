import "./main.module.css";
import logo from "../../images/panda.png";
import classes from "./main.module.css";

const Main = () => {
  return (
    <main>
      <div className={classes.main__container}>
        <div className={classes.main__title}>
          <img src={logo} alt="hello" />
          <div className={classes.main_greeting}>
            <h1>Hello Charles</h1>
            <p>Welcome to Charles Blog</p>
          </div>
        </div>

        <div className={classes.main__cards}>
          <div className={classes.card}>
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className={classes.card_inner}>
              <p className="text-primary-p">Number of Subscribers</p>
              <span className="font-bold text-title">123</span>
            </div>
          </div>

          <div className={classes.card}>
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className={classes.card_inner}>
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">456</span>
            </div>
          </div>

          <div className={classes.card}>
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className={classes.card_inner}>
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">789</span>
            </div>
          </div>

          <div className={classes.card}>
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className={classes.card_inner}>
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">12</span>
            </div>
          </div>
        </div>

        <div className={classes.charts}>
          <div className={classes.charts__left}>
            <div className={classes.charts__left__title}>
              <div>
                <h1>Daily Report</h1>
                <p>Chart Viewer</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            {/* <Charts/> */}
          </div>

          <div className={classes.charts__right}>
            <div className={classes.charts__right__title}>
              <div>
                <h1>State Report</h1>
                <p>Chart Viewer</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <div className={classes.charts__right__cards}>
              <div className={classes.card1}>
                <h1>Income</h1>
                <p>$28,817</p>
              </div>

              <div className={classes.card2}>
                <h1>Expense</h1>
                <p>$31,202</p>
              </div>

              <div className={classes.card3}>
                <h1>School Fees</h1>
                <p>576,000</p>
              </div>

              <div className={classes.card4}>
                <h1>Rent Fees</h1>
                <p>316,800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
