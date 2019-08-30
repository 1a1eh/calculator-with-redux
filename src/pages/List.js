import React from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import { onAdd } from '../redux/action-creators/index';
import { connect } from 'react-redux';

const List = ({ list }) => {
	return (
		<div style={{ width: '500px', margin: '40px auto', textAlign: 'center' }}>
			{list &&
			list.length > 0 && (
				<Card>
					<CardHeader>
						<h2>List</h2>
					</CardHeader>
					<CardBody>{list.map((item) => <div key={item.id}>{item.text}</div>)}</CardBody>
				</Card>
			)}
		</div>
	);
};

const mapStateToProps = (state) => console.log(state) || ({
	list: state.reducer
});

export default connect(mapStateToProps)(List);
