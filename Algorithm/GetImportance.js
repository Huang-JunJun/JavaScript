const GetImportance = (employees, id) => {
	function Employee(id, importance, subordinates) {
		this.id = id;
		this.importance = importance;
		this.subordinates = subordinates;
	}

	if (employees.length > 2000) return;

	let employeesList = employees.map((item) => {
		return new Employee(item[0], item[1], item[2]);
	});
	console.log('employeesList', employeesList);

	let employe = employeesList.find((item) => item.id === id);

	if (employe.subordinates.length > 0) {
		let sumImport = employe.importance;
		employe.subordinates.forEach((item) => {
			sumImport =
				sumImport + employeesList.find((k) => k.id === item).importance;
		});
		return sumImport;
	} else {
		return employe.importance;
	}
};

console.log(
	GetImportance(
		[
			[1, 5, [2, 3]],
			[2, 3, []],
			[3, 3, []],
		],
		1
	)
);
