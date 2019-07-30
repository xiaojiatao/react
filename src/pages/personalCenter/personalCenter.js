import React from 'react';
import classnames from 'classnames';
import './personalCenter.css';
import Header from '../../pages/common/header.js';


let liArr = [
	{ 
		name: '我的位置'
	},
	{ 
		name: '客户档案'
	},
	{ 
		name: '我的佣金'
	},
	{ 
		name: '我的主页'
	}
];
let resultArr = [
	{ 
		name: '我的粉丝'
	},
	{ 
		name: '我的评价'
	},
	{ 
		name: '我的信誉'
	},
	{ 
		name: '是否开通咨询服务'
	}
]
class personalCenter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isService: false };
		this.onSwitch = this.onSwitch.bind(this);
	}
	onSwitch () {
		let { isService } = this.state;
		isService = !isService;
		this.setState({
            isService
        })
	}

	render () {
		let isService = this.state.isService;
		return (
			<div className="personal-center">
				<Header name="个人中心" />
				{/* 我的入口  start */}
				<div className="m-port">
					<ul>
						<li>
							<img src={require('../../img/mine/m-mall.jpg')} alt="积分商城" />
						</li>
						<li>
							<img src={require('../../img/mine/m-integral.jpg')} alt="我的积分" />
						</li>
					</ul>
				</div>
				{/* 我的入口  end */}
				{/* 我的信息  start */}
				<div className="information mt12">
					<ul>
						{
							liArr.map((item, index) => {
								return (
									<li key={index}>
										<i className={classnames('li-icon', {
											'i-one': index === 0,
											'i-two': index === 1,
											'i-three': index === 2,
											'i-four': index === 3
										})}></i>
										<span>{item.name}</span>
										<div className="li-tu">
											<img src={require('../../img/mine/arrow.png')} alt="右侧箭头" />
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
				{/* 我的信息  end */}
				{/* 我的成果  start */}
				<div className="information mt12">
					<ul>
						{
							resultArr.map((item, index) => {
								return (
									<li key={index} >
										<i className={classnames('li-icon', {
											'i-five': index === 0,
											'i-six': index === 1,
											'i-seven': index === 2,
											'i-eight': index === 3
										})}></i>
										<span>{item.name}</span>
										{
											index === 3 ?
											<span onClick={() => this.onSwitch()} className={classnames('switch', {
												'switch-on': isService,
											})} ><i></i></span> :
											<div className="li-tu">
												<img src={require('../../img/mine/arrow.png')} alt="右侧箭头" />
											</div>
										}
									</li>
								)
							})
						}
					</ul>
				</div>
				{/* 我的成果  end */}
			</div>
		);
	}
}

export default personalCenter;
