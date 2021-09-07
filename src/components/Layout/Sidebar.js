import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
 import './sidebar.css';
import Navbars from '../Header/Navbars'
const  Sidebar =(props) => {
    return (
      <div>
        <div className="wrapper">
          <Navbars  />
          <Grid container>
            <Grid item xs={2}>
              <div className="sidebar">
                <div className="profile">
                  <img
                    // src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                    src="/image/Raihan.jpg"
                    alt="profile_picture"
                  />
                  <h3>Raihan</h3>
                  <p>Developer</p>
                </div>
                <ul>
                  <li>
                    <Link to="#" className="active">
                      <span className="icon">
                        <i className="fas fa-home"></i>
                      </span>
                      <span className="item">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-desktop"></i>
                      </span>
                      <span className="item">My Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-user-friends"></i>
                      </span>
                      <span className="item">People</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </span>
                      <span className="item">Perfomance</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-database"></i>
                      </span>
                      <span className="item">Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-chart-line"></i>
                      </span>
                      <span className="item">Reports</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-user-shield"></i>
                      </span>
                      <span className="item">Admin</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon">
                        <i className="fas fa-cog"></i>
                      </span>
                      <span className="item">Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
            
            <Grid item xs={10}>
            {props.children}
            </Grid>
 
          </Grid>
        </div>
      </div>
    );
}

export default Sidebar
 