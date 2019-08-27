import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';

// const historyList = (list) => {
// 	if (list.length > 9) {
// 		return list.splice(list.length - 10, list.length);
// 	}
// 	console.log(list);
// 	return list;
// };

const History = ({ history }) => {
	return (
		<div style={{ margin: '40px auto', textAlign: 'center', width: '500px' }}>
			{history &&
			history.length > 0 && (
				<Card>
					<CardBody>
						<h1>History</h1>
						{history.map((item, index) => (
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
