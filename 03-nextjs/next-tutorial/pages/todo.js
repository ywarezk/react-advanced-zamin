// /todo

import { useEffect, useState } from "react"

/**

<ul>
	<li></li>
</ul>


 */
 
export default function Todo() {
	const [tasks, setTasks] = useState([])
	 
	useEffect(() => {
		fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
			.then((response) => {
				return response.json();
			})
			.then((tasks) => {
				setTasks(tasks);
			})
	}, [])
	 
	return (
		<ul>
		 	{
				tasks.map((task) => {
					return (
						<li	key={task.id}>
							{
								task.title
							}
						</li>
					)
				})	 
			}
		</ul>
	)
}