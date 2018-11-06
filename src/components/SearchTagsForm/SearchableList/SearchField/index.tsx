import * as React from 'react'
import './index.css'

export interface IProps {
    filter: (text: string) => void
}

export default class SearchField extends React.Component<IProps> {
    private searchInput: HTMLInputElement;
	constructor(props: IProps) {
        super(props)
	}

	onTextChanged = (e: React.FormEvent<HTMLInputElement>) => {
        this.props.filter(e.currentTarget.value.trim())
	}

	onClearClicked = () => {
		this.searchInput.value = ''
		this.props.filter('')
	}

	render() {
		return(
			<div className='search-field'>
				<input placeholder='Поиск' onChange={this.onTextChanged} ref={ (el: HTMLInputElement) => {this.searchInput = el} } />
				<div className='input-clear' onClick={this.onClearClicked} ></div>
			</div>
		)
	}
}