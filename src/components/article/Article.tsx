import React from 'react';
import planImg from 'src/images/plane.png';
import styles from './Article.module.scss';

type ArticleProps = {
	fontFamily?: string;
	fontSize?: string;
	fontColor?: string;
	backgroundColor?: string;
	contentWidth?: string;
};

export const Article: React.FC<ArticleProps> = ({
	fontFamily = 'Open Sans',
	fontSize = '18px',
	fontColor = '#000000',
	backgroundColor = '#ffffff',
	contentWidth = '1394px',
}) => {
	return (
		<div
			className={styles.article}
			style={{
				backgroundColor,
				fontFamily: `'${fontFamily}', sans-serif`,
				fontSize,
				color: fontColor,
			}}>
			<div className={styles.container} style={{ maxWidth: contentWidth }}>
				<h1 className={styles.title}>ПОРТРЕТ ЗАПАДНОЙ ШВЕЙЦАРИИ</h1>
				<p className={styles.subtitle}>
					ПРИМИТИВИСТ ФИШТР РАСПИСЫВАЕТ НОВЫЙ БЮДЖЕТНЫЙ АВИАЛАЙНЕР
				</p>
				<img src={planImg} alt='Самолёт' className={styles.image} />
				<p className={styles.photoCredit}>
					Фото: Hans-Peter Gauster, «Bombardier CSeries CS300 HB-JCA» © 2017 CC
					BY-SA 2.0
				</p>
				<div className={styles.text}>
					<p>
						В конце 2016 года швейцарская авиакомпания Swiss получила свой
						первый канадский «Bombardier CS300»...
					</p>
					<p>
						Выбор пал на примитивиста Матиаса Форбаша, работающего под
						псевдонимом Фиштр...
					</p>
				</div>
			</div>
		</div>
	);
};