import {onOpenText} from "./modules/onOpenText.js";


window.addEventListener('DOMContentLoaded', function () {

	const NEWS_BLOCK_SELECTOR = '.js-newscards-block-wrap';
	const NEWS_ARTICLE_SELECTOR = '.js-new-article';
	const BTNS_SELECTOR = '.js-btn-read-next';
	const TEXT_SELECTOR = '.js-newscard-text';
	const TEXT_OPEN_CLASS = 'newscard-text--open';


// Открытие новостей
	const newsBlock = document.querySelector(NEWS_BLOCK_SELECTOR);

	if(newsBlock){
		let btns = newsBlock.querySelectorAll(BTNS_SELECTOR);
		//События на все кнопки открытия новостей
		Array.from(btns).forEach((item) => item.addEventListener('click',
			onOpenText.bind(this, item, NEWS_ARTICLE_SELECTOR, TEXT_SELECTOR, TEXT_OPEN_CLASS)));

		// Подписка на изменение блока новостей, если будет подгрузка с сервера
		const observer = new MutationObserver(() => {
			//Удаляем старые события при подгрузке новых новостей с сервера
			Array.from(btns).forEach((item) => item.removeEventListener('click',
				onOpenText.bind(this, item, NEWS_ARTICLE_SELECTOR, TEXT_SELECTOR, TEXT_OPEN_CLASS)));

			//Переназначаем кнопки при подгрузке новых новостей с сервера
			btns = newsBlock.querySelectorAll(BTNS_SELECTOR);

			//Переназначаем События на все кнопки открытия новостей
			Array.from(btns).forEach((item) => item.addEventListener('click',
				onOpenText.bind(this, item, NEWS_ARTICLE_SELECTOR, TEXT_SELECTOR, TEXT_OPEN_CLASS)));
		});

		observer.observe(newsBlock, {
			childList: true, // наблюдать за непосредственными детьми
			characterDataOldValue: false // передавать старое значение в колбэк
		});
	}

});
