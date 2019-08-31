import React from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { onToggleItem } from '../redux/action-creators/index';

const List = ({ list, onToggle }) => {
	return (
		<div style={{ width: '500px', margin: '40px auto', textAlign: 'center' }}>
			{list &&
			list.length > 0 && (
				<Card>
					<CardHeader>
						<h2>List</h2>
					</CardHeader>
					<CardBody>
						{list.map((item, index) => (
							<div
								key={index}
								onClick={() => onToggle(item.id)}
								style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
							>
								{item.text}
							</div>
						))}
					</CardBody>
				</Card>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	list: state.reducer
});

const mapDispatchToprops = (dispatch) => ({
	onToggle: (id) => dispatch(onToggleItem(id))
});

export default connect(mapStateToProps, mapDispatchToprops)(List);
