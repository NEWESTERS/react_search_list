import * as React from 'react'
import './index.css'

export interface IProps {
    data: any[];
    itemSelect: (index: number) => void
}

export default class AvailableList extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
	}

	render() {
		return(
			<div className='available-list'>
				{
					this.props.data.map((item, i) => {
						return item.shouldRender && <div key={ item.id } className='available-item' onClick={ () => { this.props.itemSelect(i) } } >{ item.name }</div>
					})
				}
			</div>
		)
	}
}

