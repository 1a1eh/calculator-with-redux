import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { addHistoryItem, opToExpression, numberToExpression } from '../redux/action-creators/index';

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
const op = [ '+', '-', '=', '*', '/' ];

const Calculator = ({ numberToExpression, opToExpression, addHistoryItem, expression }) => {
	return (
		<div style={{ margin: '50px auto', width: '500px', textAlign: 'center' }}>
			<Card>
				<CardHeader><h1>Calculator</h1></CardHeader>
				<CardBody>
					<h3>
						{numbers.map((num) => (
							<button key={num} onClick={() => numberToExpression(num)}>
								{num}
							</button>
						))}
					</h3>
					<h3>
						{op.map((item, index) => (
							<button
								key={index}
								onClick={() => (item === '=' ? addHistoryItem(expression) : opToExpression(item))}
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
	expression: state.expressionEdit
});

const mapDispatchToProps = (dispatch) => ({
	numberToExpression: (num) => dispatch(numberToExpression(num)),
	opToExpression: (op) => dispatch(opToExpression(op)),
	addHistoryItem: (expr) => dispatch(addHistoryItem(expr))
});
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
