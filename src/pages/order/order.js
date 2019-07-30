import React from 'react';
import classnames from 'classnames';
import './order.css';
import porImg from '../../img/order/por.png';
import orderImg from '../../img/order/order.jpg';



var headNav = [
	{ name: '项目订单' },
	{ name: '咨询订单' },
	{ name: '打赏订单' }
];

var navChild = [
 	{ name: '全部' },
 	{ name: '待服务' },
 	{ name: '待录档' }
];

var listArr = [
	{	
		page: 0,
		content: [{
			img: porImg,
			title: '张三丰',
			time: '2019-07-30  18:23:20'
		},{
			img: porImg,
			title: '李四瑶',
			time: '2019-07-30  11:19:30'
		},{
			img: porImg,
			title: '王美丽',
			time: '2019-07-30  18:23:20'
		}]
	},{	
		page: 1,
		content: [{
			img: porImg,
			title: '范彬彬',
			time: '2019-06-28  18:23:20'
		},{
			img: porImg,
			title: '范思瑶',
			time: '2019-06-25  11:19:30'
		},{
			img: porImg,
			title: '张碧晨',
			time: '2019-07-1  18:23:20'
		}]
	}
]

var childList = [{
	page: 0,
	content: [{
		img: orderImg,
		title: '项目名称（评估）1111',
		expense: '180.00',
		time: '2016-03-02 12:30',
		status: 0, // 交易取消
		isButton: false // 不显示
	},{
		img: orderImg,
		title: '项目名称(评估)',
		expense: '180.00',
		time: '2016-03-02 12:30',
		status: 1, // 交易完成
		isButton: true  // 显示
	}]
},{
	page: 1,
	content: [{
		img: orderImg,
		title: '项目名称（评估）002',
		expense: '180.00',
		time: '2016-03-02 12:30',
		status: 2, // 待服务
		isButton: true // 显示
	},{
		img: orderImg,
		title: '项目名称(评估)',
		expense: '260.00',
		time: '2016-03-02 12:30',
		status: 3, // 超时订单
		isButton: true  // 显示
	}]
},{
	page: 2,
	content: [{
		img: orderImg,
		title: '项目名称（评估）003',
		expense: '180.00',
		time: '2016-03-02 12:30',
		status: 4, // 待录档
		isButton: true // 显示
	}]
}]

class order extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: 0, cActive: 0 };
		this.changeHeadFn = this.changeHeadFn.bind(this);
		this.changeChildFn = this.changeChildFn.bind(this);
	}
	
	changeHeadFn (index) {
		let { active } = this.state;
		this.setState({
			active: index,
		})
	}
	
	changeChildFn (index) {
		let {cActive} = this.state;
		this.setState({
			cActive: index
		})
	}

	render () {
		let {active,cActive} = this.state;

		return (
			<div className="order">
				{/* header start */}
				<header>
					<i className="i-back"></i>
					<ul>
						{
							headNav.map((item, index) => {
								return (
									<li key={index} onClick={() => this.changeHeadFn(index)} className={classnames({
										'hover': index === active
									})}  > { item.name } </li>
								);
							})
						}
					</ul>
				</header>
				{/* header end */}
				{/* content start */}
				<div className="content-wrapper">
					<ul className={classnames({
						'show-box': active === 0
					})}>
						<nav className="nav-child">
							<ul>
								{
									navChild.map((childItem, childIndex) => {
										return (
											<li key={childIndex} onClick={() => this.changeChildFn(childIndex)} className={classnames({
												'hover': childIndex === cActive
											})}>{childItem.name}</li>
										)
									})
								}
							</ul>
						</nav>
						<div className="one-wrapper">
							{
								childList.map((item, index) => {
									return (
										<ul key={index} className={classnames({
											'show': index === cActive
										})}>
											{
												item.content.map((liItem, liIndex) => {
													return (
														<li key={liIndex}>
															<div className="up-box">
																<div className="li-tu">
																	<img src={liItem.img} alt="项目图片" />
																</div>
																<div className="li-wenzi">
																	<p className="p-title">
																		<span className="sp-tit">{liItem.title}</span>
																		<span className={classnames("sp-status",{
																			'blue': liItem.status === 2 || liItem.status === 4,
																			'orange': liItem.status === 3
																		})}>{liItem.status === 0 ? '交易取消': liItem.status === 1 ? '交易完成' : liItem.status === 2 ? '待服务' : liItem.status === 3 ? '超时订单' : '待录档'}</span>
																	</p>
																	<p className="p-ser">
																		<span className="sp-name">服务资费:</span>
																		<span className="sp-tm"><i>￥</i>{liItem.expense}</span>
																	</p>
																	<p className="p-time">
																		<span >到店时间:</span>
																		<span >{liItem.time}</span>
																	</p>
																</div>
															</div>
															<div className={classnames('dw-box', {
																'btn-show': liItem.isButton === true
															})}>
																<span className="sp-look">查看档案</span>
																<i className="arrow-rg"></i>
															</div>
														</li>
													)
												})
											}
										</ul>
									)
								})
							}
						</div>
					</ul>
					<ul className={classnames({
						'show-box': active === 1
					})}>
						{
							listArr[0].content.map((lsItem, lsIndex) => {
								return (
									<li className="child-li" key={lsIndex}>
										<div className="ls-lf">
											<img src={lsItem.img} alt="头像" />
										</div>
										<div className="ls-rg">
											<h3>{lsItem.title}</h3>
											<span>{lsItem.time}</span>
										</div>
									</li>
								)
							})
						}
					</ul>
					<ul className={classnames({
						'show-box': active === 2
					})}>
						{
							listArr[1].content.map((lsItem, lsIndex) => {
								return (
									<li className="child-li" key={lsIndex}>
										<div className="ls-lf">
											<img src={lsItem.img} alt="头像" />
										</div>
										<div className="ls-rg">
											<h3>{lsItem.title}</h3>
											<span>{lsItem.time}</span>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
				{/* content end */}
			</div>
		)
	}
	
}

export default order;
