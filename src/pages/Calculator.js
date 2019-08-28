import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { numToExpression, opToExpression, addHistory } from '../redux/action-creators/index';
import { connect } from 'react-redux';

const number = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const op = [ '+', '-', '*', '/', '=' ];

const Calculator = ({ expression, numberToExpression, operationToExpression, addHistoryItem }) => {	
	return (
		<div style={{ margin: '40px auto', textAlign: 'center', width: '500px' }}>
			<Card>
				<CardHeader>
					<h1>Calculator</h1>
				</CardHeader>
				<CardBody>
					<h3>
						{number.map((num) => (
							<button key={num} onClick={() => numberToExpression(num)}>
								{num}
							</button>
						))}
					</h3>
					<h3>
						{op.map((item, index) => (
							<button
								key={index}
								onClick={() =>
									item === '=' ? addHistoryItem(expression) : operationToExpression(item)}
							>
								{item}
							</button>
						))}
					</h3>
					<h3>
						<input style={{textAlign: 'center'}} disabled={true} value={expression} />
					</h3>
				</CardBody>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => ({
	expression: state.currentExpression
});

const mapDispatchToProps = (dispatch) => ({
	numberToExpression: (num) => dispatch(numToExpression(num)),
	operationToExpression: (op) => dispatch(opToExpression(op)),
	addHistoryItem: (expr) => dispatch(addHistory(expr))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
