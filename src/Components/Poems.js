import { useState } from 'react';

function Poem(props) {
	const [poemTitle, setPoemTitle] = useState('');
	const [poemContent, setPoemContent] = useState('');
	const [poemId, setPoemId] = useState(0);
	const [isClicked, setIsClicked] = useState(false);

	function handleChangeItem(event) {
		const input = event.target.value;
		setPoemTitle(input);
	}

	function handleChangeAmount(event) {
		const input = event.target.value;
		setPoemContent(input);
	}

	function handleSubmit(event) {
		event.preventDefault();

		fetch(`https://localhost:3000/poem/${props.user._id}`,

			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					detail: poemTitle,
					content: poemContent,
					user: props.user._id,
				}),
			}
		)
			.then((res) => res.json())
			.then((user) => props.setUser(user))
			.then((user) => {
				setPoemTitle('');
				setPoemContent('');
			});
	}

	function handleDelete(deletedId) {
		fetch(`https://localhost:8080/poem/${deletedId}/${props.user._id}`,

			{
				method: 'DELETE',
			}
		)
			.then((res) => res.json())
			.then((data) => props.setUser(data.user));
	}

	function setUpdate(id) {
		setPoemTitle(id.detail);
		setPoemContent(id.amount);
		setPoemId(id._id);
	}

	function handleUpdate() {
		fetch(`https://localhost:8080/user/${poemId}/${props.user._id}`,
			{
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					detail: poemTitle,
					content: poemContent,
				}),
			}
		)
			.then((res) => res.json())
			.then((data) => props.setUser(data.user));
	}

	let poemHtml = props.user.poems.map((lineItem) => {
		return (
			<div className='itemBubble'>
				<p className='poem-content' key={lineItem._id}>
					<span className='list-title'>{lineItem.title}</span>{' '}
					<span className='list-content'>${lineItem.content}</span>
				</p>
				<button
					className='secondary-button'
					onClick={() => {
						setUpdate(lineItem);
						setIsClicked(true);
					}}>
					Edit
				</button>
				<button
					className='secondary-button'
					onClick={() => {
						handleDelete(lineItem._id);
					}}>
					Delete
				</button>
			</div>
		);
	});

	console.log(props.user);

	return (
		<div className='poem-container'>
			<div className='poem-input-box'>
				<h2 className='expenseAdd'>add poem</h2>
				<input
					className='userExpense'
					onChange={handleChangeItem}
					type='text'
					placeholder='enter an expense'
					value={poemTitle}
				/>
				<input
					className='userAmount'
					onChange={handleChangeAmount}
					type='number'
					placeholder='enter the amount'
					value={poemContent}
				/>
				<button className='primaryButton' onClick={handleSubmit} type='submit'>
					Add Poem
				</button>
			</div>
			{isClicked && (
				<div id='edit-field'>
					<h2 className='editTab'>Edit</h2>
					<input value={poemTitle} type='text' onChange={handleChangeItem} />
					<input
						value={poemContent}
						type='number'
						onChange={handleChangeAmount}
					/>
					<button
						className='primaryButton'
						onClick={() => {
							handleUpdate();
							setIsClicked(false);
						}}
						type='submit'>
						Submit
					</button>
				</div>
			)}
			<div className='poem-list-box'>
				<p className='poem-list'>{poemHtml}</p>
			</div>
		</div>
	);
}

export default Poem;
