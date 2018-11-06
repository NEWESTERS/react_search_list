import * as React from 'react'
import SearchField from './SearchField'
import SelectedList from './SelectedList'
import AvailableList from './AvailableList'
import './index.css'

export interface IProps {
    data: any;
    onClose: (selected: any[]) => void;
}

interface IState {
    available: Array<any>;
    selected: Array<any>;
}

export default class SearchableList extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		let available = props.data.map( (item: any) => {
			item.shouldRender = true
			return item
		})

		this.state = {
			available: available,
			selected: []
		}
	}

	filterList = (text: string) => {
        let filteredList = this.state.available.map( (item: any) => {
        	item.shouldRender = (item.name.toLowerCase().search(text.toLowerCase())!== -1)
        	return item        	
        })

        this.setState({available: filteredList})
    }

    handleItemSelect = (index: number) => {
    	let available = this.state.available,
    		selected = this.state.selected

    	selected.push(available[index])
    	available.splice(index, 1)

    	this.setState({
    		selected: selected,
    		available: available
    	})
    }

    handleItemDeselect = (index: number) =>  {
    	let available = this.state.available,
    		selected = this.state.selected

    	selected[index].shouldRender = true
    	available.push(selected[index])
    	selected.splice(index, 1)

    	this.setState({
    		selected: selected,
    		available: available
    	})
    }

    onCloseClick = () => {
    	this.props.onClose(this.state.selected)
    }

	render() {
		return (
			<div className='searchable-list'>
				<div className='form-header'>
					<h3>ВЫБРАННЫЕ ПОДРАЗДЕЛЕНИЯ</h3>
					<div onClick={this.onCloseClick}></div>
				</div>
				<SelectedList data={this.state.selected} itemDeselect={this.handleItemDeselect} />

				<SearchField filter={this.filterList} />

				<AvailableList data={this.state.available} itemSelect={this.handleItemSelect} />
			</div>
		)
	}
}