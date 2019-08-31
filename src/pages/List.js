import React from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { onToggleItem, onDeleteItem } from '../redux/action-creators/index';

const List = ({ list, onToggle, onDelete }) => {
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
								<span>{item.text}</span>
								<Button
									style={{ margin: '10px 20px' }}
									size="sm"
									color="danger"
									onClick={() => onDelete(item.id)}
								>
									Delete
								</Button>
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
	onToggle: (id) => dispatch(onToggleItem(id)),
	onDelete: (id) => dispatch(onDeleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToprops)(List);
