import React from 'react';
import {Route,BrowserRouter,Switch,Link} from 'react-router-dom';
/*import IntegralMall from './IntegralMall';*/
import WorkBench from './pages/workBench/workBench';
import Information from './pages/information/information';
import Order from './pages/order/order';
import MyAdvice from './pages/workBench/myAdvice/myAdvice';
import PersonalCenter from './pages/personalCenter/personalCenter';

import './App.css';

function App() {

  return (
  	<div className="wrapper">
  		<BrowserRouter>
	  		<div className="containter">
				  	{/*<Route path="/IntegralMall" component={IntegralMall} />*/}
				  	<Switch>
				  		<Route path="/WorkBench" component={WorkBench} />
					  	<Route path="/Information" component={Information} /> 
					  	<Route path="/Order" component={Order} />
					  	<Route path="/PersonalCenter" component={PersonalCenter} />
					  	<Route path="/MyAdvice" component={MyAdvice} />
				  	</Switch>
	  		</div>
	  		
			  {/* footer start*/}
			  <footer>
			  	<ul>
			  			<Link to="/WorkBench">
					  		<li>
					  			<i className="icon i-work"></i>
					  			<span>工作台</span>
					  		</li>
				  		</Link>
				  		<Link to="/Information">
				  		<li>
				  			<i className="icon i-news"></i>
				  			<span>资讯</span>
				  		</li>
				  		</Link>
				  		<Link to="/Order">
				  		<li>
				  			<i className="icon i-order"></i>
				  			<span>订单</span>
				  		</li>
				  		</Link>
				  		<Link to="/PersonalCenter">
					  		<li>
					  			<i className="icon i-mine"></i>
					  			<span>我的</span>
					  		</li>
				  		</Link>
			  	</ul>
			  </footer>
			  {/* footer end*/}
    	</BrowserRouter>
    </div>
  );
}

export default App;
