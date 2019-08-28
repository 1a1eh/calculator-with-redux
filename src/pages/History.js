import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';

const historyList = (history) => {
	let historyCopy = [ ...history ];
	if (historyCopy.length > 9) {
		return historyCopy.splice(-10, 10);
	}
	return historyCopy;
};

const History = ({ history }) => {
	const list = historyList(history);
	return (
		<div style={{ margin: '50px auto', width: '500px', textAlign: 'center' }}>
			{list &&
			list.length > 0 && (
				<Card>
					<CardHeader>
						<h1>History</h1>
					</CardHeader>
					<CardBody>
						{list.reverse().map((item, index) => (
							<h5 key={index}>
								{item.expression} = {item.result}
							</h5>
						))}
					</CardBody>
				</Card>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	history: state.history
});

export default connect(mapStateToProps)(History);
