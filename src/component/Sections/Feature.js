import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import SectionTitle from '../Elements/SectionTitle';
import FeatureItem from '../SingleItem/FeatureItem';
import { FaArrowUp } from 'react-icons/fa';
import featureData from '../../data/feature';

class Feature extends Component {
	constructor(props) {
		super(props);
		this.state = featureData;
	}

	render() {
		const featureItems = this.state.featureList.map((item) => {
			return (
				<div key={item.id} className="col-lg-3 col-sm-6 col-md-6">
					<FeatureItem key={item.id} heading={item.heading} info={item.info} imgUrl={item.imgUrl} />
				</div>
			);
		});

		return (
			<section className="features-area section-gap-top" id="features">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<SectionTitle title={this.state.title} text={this.state.text} />
						</div>
					</div>

					<div className="row">{featureItems}</div>
				</div>
			</section>
		);
	}
}

class AnotherFeature extends Component {
	constructor(props) {
		super(props);
		this.state = featureData;
	}

	render() {
		return (
			<section className="another-feature-area relative">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="service-left">
								<img className="img-fluid img-box-shadow" src={require('../../assets/img/webgui.png')} alt="" />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="row justify-content-center">
								<div className="col-lg-12">
									<SectionTitle title={this.state.title2} text={this.state.text2} />
								</div>
							</div>
							<Accordion>
								<AccordionItem>
									<AccordionItemTitle aria-selected="true">
										<h3 id="forjek">Ограничение доступа на территорию</h3>
										<div className="icon">
											<FaArrowUp />
										</div>
									</AccordionItemTitle>
									<AccordionItemBody>
										<p>
											Старые "чипы" и брелки легко клонируются и подделываются, их количество не возможно контролировать. Теперь Вы точно знаете количество доступов на территорию и сможете удалять не нужные или не актуальные. Наша система подключается к любым старым контроллерам замков, ворот и шлагбаумов.
										</p>
									</AccordionItemBody>
								</AccordionItem>

								<AccordionItem>
									<AccordionItemTitle>
										<h3>Работа с не плательщиками</h3>
										<div className="icon">
											<FaArrowUp />
										</div>
									</AccordionItemTitle>
									<AccordionItemBody>
										<p>
											По статистике бумажные сразу счета оплачивают только 20% жильцов. Система автоматически отправит push сообщение на телефон жильца с задолженностью. Так-же Вы можете ограничить въезд или пользования парковкой до устранения задолженности.
										</p>
									</AccordionItemBody>
								</AccordionItem>

								<AccordionItem>
									<AccordionItemTitle>
										<h3>Статистика и вызов мастера</h3>
										<div className="icon">
											<FaArrowUp />
										</div>
									</AccordionItemTitle>
									<AccordionItemBody>
										<p>
											В Web-интерфейсе ЖК Вы получаете статистику по количеству и журнал доступа на территорию ЖК, часы пик, количество активных жильцов. А так-же уведомления от жильцов для вызова мастера.
										</p>
									</AccordionItemBody>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
					<img className="round-img img-fluid" src={require('../../assets/img/rounds.png')} alt="" />

					<div className="service-shapes">
						<img src={require('../../assets/img/service/shape1.png')} className="shape shape1 animate" alt="" />
						<img src={require('../../assets/img/service/shape2.png')} className="shape shape2 animate" alt="" />
						<img src={require('../../assets/img/service/shape3.png')} className="shape shape3 animate" alt="" />
						<img src={require('../../assets/img/service/shape4.png')} className="shape shape4 animate" alt="" />
						<img src={require('../../assets/img/service/shape5.png')} className="shape shape5 animate" alt="" />
						<img src={require('../../assets/img/service/shape5.png')} className="shape shape6 animate" alt="" />
						<img src={require('../../assets/img/service/shape4.png')} className="shape shape7 animate" alt="" />
						<img src={require('../../assets/img/service/shape1.png')} className="shape shape8 animate" alt="" />
					</div>
				</div>
			</section>
		);
	}
}

export { Feature, AnotherFeature };
