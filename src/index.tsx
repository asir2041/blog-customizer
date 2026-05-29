import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

import { ArticleParamsForm } from './components/article-params-form';
import { Article } from './components/article';
import { defaultArticleState, ArticleStateType } from './constants/articleProps';

import './styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<>
			<ArticleParamsForm
				currentState={articleState}
				onApply={setArticleState}
			/>
			<Article
				fontFamily={articleState.fontFamilyOption.value}
				fontSize={articleState.fontSizeOption.value}
				fontColor={articleState.fontColor.value}
				backgroundColor={articleState.backgroundColor.value}
				contentWidth={articleState.contentWidth.value}
			/>
		</>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);