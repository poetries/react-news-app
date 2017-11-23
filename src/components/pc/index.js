import React from 'react';
// import PCHeader from './pc_header';
import PCHeader from '../../containers/header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component {
	render() {
    // console.log(this.props.match)
		return (
			<div>
				<PCHeader />
				<PCNewsContainer match={this.props.match.url} />
				<PCFooter />
			</div>
		);
	};
}
