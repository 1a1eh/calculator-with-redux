import React from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';
import { onAddItem } from '../redux/action-creators/index';
import { connect } from 'react-redux';

const Add = ({ onAdd }) => {
	const [ value, setValue ] = React.useState('');
	return (
		<form style={{ width: '500px', margin: '40px auto', textAlign: 'center' }}>
			<Card>
				<CardHeader>
					<h2>Add Todo</h2>
				</CardHeader>
				<CardBody>
					<input value={value} onChange={(e) => setValue(e.target.value)} />
				</CardBody>
				<CardFooter>
					<Button
						type="submit"
						onClick={(e) => {
							onAdd(value);
							e.preventDefault('');
							setValue('');
						}}
					>
						+ Add Todo
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onAdd: (text) => dispatch(onAddItem(text))
});

export default connect(null, mapDispatchToProps)(Add);
