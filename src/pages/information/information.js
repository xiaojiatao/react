import React from 'react';
import classnames from 'classnames';
import './information.css';
import Header from '../../pages/common/header.js';
import tu1 from '../../img/information/tu1.png';
import tu2 from '../../img/information/tu2.png';
import tu3 from '../../img/information/tu3.jpg';




var navArr = [{name: '服务技巧'},{name: '能力提高'},{name: '新闻动态'},{name: '活动通知'}];
var newList = [
	{
		id: 0,
		content: [{
			img: tu1,
			title: '11111如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 , 内容 内容 内容 内容 内容 内容 内容',
			time: '2016-03-06  18:23:20',
			number: '35'
		},{
			img: tu2,
			title: '如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 ,内容 内容 内容 内容 内容 内容',
			time: '2019-07-29  10:17:20',
			number: '20'
		}]
	},
	{
		id: 1,
		content: [{
			img: tu3,
			title: '11111如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 , 内容 内容 内容 内容容 内容 内容 内容',
			time: '2016-03-06  18:23:20',
			number: '35'
		},{
			img: tu1,
			title: '如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 ,内容 内容 内容  内容 内容 内容 内容 内容',
			time: '2019-07-29  10:17:20',
			number: '20'
		}]
	},
	{
		id: 2,
		content: [{
			img: tu1,
			title: '333如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 , 内容 内容 内容 内容容 内容 内容 内容',
			time: '2016-03-06  18:23:20',
			number: '35'
		},{
			img: tu2,
			title: '如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 ,内容 内容 内容  内容 内容 内容 内容 内容',
			time: '2019-07-29  10:17:20',
			number: '20'
		}]
	},
	{
		id: 3,
		content: [{
			img: tu3,
			title: '444如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 , 内容 内容 内容 内容容 内容 内容 内容',
			time: '2016-03-06  18:23:20',
			number: '35'
		},{
			img: tu2,
			title: '如何 关注 青少年, 保持 良好 教育 的 最佳 方法 是 什么?',
			content: '青少年 的 健康 关系 着 ,内容 内容 内容  内容 内容 内容 内容 内容',
			time: '2019-07-29  10:17:20',
			number: '15'
		}]
	}
]


class information extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: 0 };
		this.changeFn = this.changeFn.bind(this);
	}
	
	changeFn (index) {
		let {active} = this.state;
		this.setState({
			active: index
		})
	}
	
	
	render () {
		let {active} = this.state;
		return (
			<div className="information">
				<Header name="资讯" />
				<nav>
					<ul>
						{
							navArr.map((item, index) => {
								return (
									<li key={index} onClick={() => this.changeFn(index)} className={classnames({
										'hover': index === active
									})}>{item.name}</li>
								)
							})
						}
					</ul>
				</nav>
				<div className="nav-blank"></div>
				<div className="tab-wrapper">
					{
						newList.map((item, index) => {
							return (
								<ul key={index} className={classnames({
									'show-box': index === active
								})}>
									{
										item.content.map((liItem, liIndex) => {
											return (
												<li key={liIndex}>
													<div className="row-up">
														<div className="tu-lf">
															<img src={liItem.img} alt="图片" />
														</div>
														<div className="wz-rg">
															<h3>{liItem.title}</h3>
															<p>{liItem.content}</p>
														</div>
													</div>
													<div className="row-dw">
														<span className="sp-lf">{liItem.time}</span>
														<span className="sp-rg">
															<i className="i-message"></i>
															<i className="i-num">{liItem.number}</i>
														</span>
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
				<div className="box-blank"></div>
			</div>
		)
	}
}

export default information;
