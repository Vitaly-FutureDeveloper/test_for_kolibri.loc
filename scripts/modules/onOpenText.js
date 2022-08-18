export const onOpenText = (btn, articleSelector, textSelector, toggleClass) => {
	const parentBlock = btn.closest(articleSelector);
	const textBlock = parentBlock.querySelector(textSelector);

	textBlock.classList.toggle(toggleClass);
};
