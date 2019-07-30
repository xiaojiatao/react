import React from 'react';
import './workBench.css';
import classnames from 'classnames';
import imgUrl from '../../img/work/header.jpg'

var portArr = [
	{
		cTitle: '我的咨询',
		number: '5',
		eTitle: 'My advice'
	},
	{
		cTitle: '待服务',
		number: '6',
		eTitle: 'To be served'
	},
	{
		cTitle: '待录档',
		number: '9',
		eTitle: 'File to be recorded'
	},
	{
		cTitle: '时间管理',
		number: '12',
		eTitle: 'time management'
	}
]


class workBench extends React.Component {
	
	jump (index) {
		if(index === 0) {
			// 跳转页面
			this.props.history.push('/MyAdvice')
		}
	}

	render () {
		return (
			<div className="work-bench">
				
				{/* banner start */}
				<div className="w-ban">
					<div className="w-ban-title">
						<span className="t-lf">
							<i className="i-set"></i>
							<i className="i-wz">设置</i>
						</span>
						<span className="t-center">工作台</span>
						<span className="t-rg">
							<i className="i-message"></i>
						</span>
					</div>
					<div className="w-ban-con">
						<div className="w-tu">
							<img src={imgUrl} alt="头像"/>
						</div>
						<div className="w-text">
							工号: <span>34124314</span>
						</div>
					</div>
				</div>
				{/* banner end */}
				{/* portList start */}
				<div className="port-box mT12">
					{
						portArr.map((item, index) => {
							return(
								<li key={index} onClick={()=>{this.jump(index)}} className={classnames({
									'port-bg1': index === 0,
									'port-bg2': index === 1,
									'port-bg3': index === 2,
									'port-bg4': index === 3
								})}>
									<i className={classnames({
										'i-port1': index === 0,
										'i-port2': index === 1,
										'i-port3': index === 2,
										'i-port4': index === 3
									})}>
									</i>
									<p className="t-num">
										<span className="name">{item.cTitle}</span>
										<span className="total">{item.number}</span>
									</p>
									<p className="e-title">{item.eTitle}</p>
								</li>
							)
						})
					}
				</div>
				{/* portList end */}
				{/* recommend  start */}
				<div className="adv-box mT12">
					<img src={require('../../img/work/adv.jpg')} alt="推荐有奖入口" />
				</div>
				{/* recommend  end */}
				<div className="box-blank"></div>
			</div>
		);
	}
}

export default workBench;
