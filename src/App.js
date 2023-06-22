// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';



import React from 'react'
function List(props)
{
  return(
    <div>✔{props.name}</div>
  )
}
function Item(props)
{
  return(
    <div>×{props.name}</div>
  )
}

function App() {
  return (
    <div>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <List name=<b>"Single User"</b>><li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li></List>
              <List name="5GB Storage"><li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li></List>
              <List name="Unlimited Public Projects"><li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li></List>
              <List name="Community Access"><li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li></List>
              <Item name="Unlimited Private Projects"><li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited Private Projects</li></Item>
              <Item name="Dedicated Phone Support"><li className="text-muted"><span className="fa-li"><i className="fas fa-times" ></i></span>Dedicated Phone Support</li></Item>
              <Item name="Free Subdomain"><li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li></Item>
              <Item name="Monthly Status Reports"><li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li></Item>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr />
               
            <ul className="fa-ul">
             <List name=<strong>"5 Users"</strong> > <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li></List>
             <List name="50GB Storage"><li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li></List>
             <List name="Unlimited Public Projects"><li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li></List>
             <List name="Community Access"><li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li></List>
             <List name="Unlimited Private Projects"><li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li></List>
             <List name="Dedicated Phone Support"><li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li></List>
             <List name="Free Subdomain"><li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li></List>
              <Item name="Monthly Status Reports"><li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li></Item>
            </ul>
            <div className="d-grid">
              <a href='#' className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <List name=<b>{"Unlimited Users"}</b> ><li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li></List>
              <List name="150GB Storage"><li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li></List>
              <List name="Unlimited Public Projects"><li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li></List>
              <List name="Community Access"><li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li></List>
              <List name="Unlimited Private Projects<"><li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li></List>
              <List name="Dedicated Phone Support"><li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li></List>
              <List name="Unlimited Free Sundomains" ><li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li></List>
              <List name="Monthly Status Report"><li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li></List>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default App