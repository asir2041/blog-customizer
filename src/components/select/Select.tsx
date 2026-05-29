import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import arrowDown from 'src/images/arrow-down.svg';
import { OptionType } from '../../constants/articleProps';
import styles from './Select.module.scss';

type SelectProps = {
	selected: OptionType;
	options: OptionType[];
	onChange: (option: OptionType) => void;
	title?: string;
	placeholder?: string;
};

export const Select = ({
	selected,
	options,
	onChange,
	title,
	placeholder = 'Выберите...',
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleOptionClick = (option: OptionType) => {
		onChange(option);
		setIsOpen(false);
	};

	return (
		<div className={styles.wrapper} ref={rootRef}>
			{title && <span className={styles.title}>{title.toUpperCase()}</span>}
			<div
				className={clsx(styles.select, { [styles.open]: isOpen })}
				onClick={() => setIsOpen((prev) => !prev)}
				role='button'
				tabIndex={0}
				onKeyDown={(e) => e.key === 'Enter' && setIsOpen((prev) => !prev)}>
				<span className={clsx(styles.selectedText, selected.className)}>
					{selected ? selected.title : placeholder}
				</span>
				<img
					src={arrowDown}
					alt='arrow'
					className={clsx(styles.arrow, { [styles.arrowUp]: isOpen })}
				/>
			</div>
			{isOpen && (
				<ul className={styles.dropdown}>
					{options.map((option) => (
						<li
							key={option.value}
							className={clsx(styles.option, option.optionClassName, {
								[styles.selected]: option.value === selected?.value,
							})}
							onClick={() => handleOptionClick(option)}
							role='option'
							aria-selected={option.value === selected?.value}>
							<span className={clsx(styles.optionText, option.className)}>
								{option.title}
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};