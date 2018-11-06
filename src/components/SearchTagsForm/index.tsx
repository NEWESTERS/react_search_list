import * as React from 'react';
import { Button } from 'semantic-ui-react';
import SearchableList from './SearchableList';

export interface IProps {
    data: any[];
}

interface IState {
    isOpened: boolean;
}

export default class SearchTagsForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            isOpened: false
        }
    }

    openForm = () => {
        this.setState({
            isOpened: true
        })
    }

    closeForm = () => {
        this.setState({
            isOpened: false
        })
    }

    public render() {
    return (
        <div>
            <div>{this.state.isOpened}</div>
            <Button icon='add' onClick={ this.openForm } />
            {  this.state.isOpened && <SearchableList data={ this.props.data } onClose={ this.closeForm } /> }
        </div>
    );
    }
}
