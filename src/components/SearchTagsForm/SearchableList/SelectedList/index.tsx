import * as React from 'react'
import './index.css'

export interface IProps {
    data: any[];
    itemDeselect: (index: number) => void;
}

interface IState {
    items: any[];
}

export default class SelectedList extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = { items: this.props.data }
	}

	handleDeleteItem = (index: number) => {
		let items = this.state.items
		items.splice(index, 1)
		this.setState({ items: items })
	}

	render() {
		return(
			<div className='selected-list'>
				{
					this.state.items.map( (item, i) => {
						return ( <div key={ item.id } className='selected-item' onClick={ () => { this.props.itemDeselect(i) } }>{ item.name }</div> )
					})
				}
			</div>
		)
	}
}