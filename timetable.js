//<p class=\"twocabs\">317</p><p class=\"twocabs\">319</p>
const TimeTable = [{
	"lessons": [
		["Дискретная математика", "акт"], {
			"odd": ["Социология (ЛК)", "202"],
			"even": ["ОТИ", "202"]
		}, {
			"odd": ["Экономическая теория", "104"],
			"even": ["", ""]
		},
	],
	"name": "Понедельник"
}, {
	"lessons": [ {
			"even": ["ИН. ЯЗЫК (1 гр.)", "430"],
			"odd": ["", ""]
		}, {
			"odd": ["ИН. ЯЗЫК", "218"],
			"even": ["ИН. ЯЗЫК", "460"]
		},
		["Физика (раз в месяц)", "402"]
	],
	"name": "Вторник"
}, {
	"lessons": [
		["",""],
		{
			"odd": ["", ""],
			"even": ["Дискретная математика (ЛК)", "418"]
		},
		["Математика (ПЗ)", "418"],
		["Физ. Культ.", "с/з"]
	],
	"name": "Среда"
}, {
	"lessons": [
		["Физика (ЛК)", "222"],
		["ОАиП", "222"], {
			"odd": ["ОТИ (ПЗ)", "412"],
			"even": ["История Беларуси (ЛК)", "432"]
		},
		["Математика (ЛК)", "244"], {
			"odd": ["Математика (ЛК)", "244"],
			"even": ["", ""]
		},
	],
	"name": "Четверг"
}, {
	"lessons": [
		{
			"odd": ["Экономическая теория (ПЗ)", "428"],
			"even": ["ИН. ЯЗЫК (2 гр.)", "214"]
		},
		{
			"odd": ["Физика (ПЗ)", "428"],
			"even": ["История Беларуси (ПЗ)", "428"]
		},
		["Математика (ПЗ)", "244"],
		["Физ. Культ.", "с/з"]
	],
	"name": "Пятница"
}, {
	"lessons": [
		["", ""],
		["", ""], {
			"odd": ["ОАиП (1 гр.)", "212"],
			"even": ["ОАиП (2 гр.)", "306"]
		}, {
			"odd": ["ОАиП (1 гр.)", "212"],
			"even": ["ОАиП (2 гр.)", "306"]
		}
	],
	"name": "Суббота"
}]
;
//конец расписания
/*
пустая пара добавляется с помошью ""
обычная пара добавляется:
			["название", "кабинет"],
пара с зависимостью от чётности недели добавляется с помощью:
			{
				even: ["Название 1,3", "кабинет"],
				odd: ["название 2,4", "кабинет"]
			},


 */


const lessonTime = [
	//первая пара
	[
		{
			start: (8 * 60),
			end: (8 * 60) + 45,
		},
		{
			start: (8 * 60) + 55,
			end: (9 * 60) + 40
		}
	],
	//вторая
	[
		{
			start: (9 * 60) + 55,
			end: (10 * 60) + 40,
		},
		{
			start: (10 * 60) + 50,
			end: (11 * 60) + 35
		}
	],
	//третья
	[
		{
			start: (12 * 60) + 15,
			end: (13 * 60),
		},
		{
			start: (13 * 60) + 10,
			end: (13 * 60) + 55
		}
	],
	//четвертая
	[
		{
			start: (14 * 60) + 10,
			end: (14 * 60) + 55,
		},
		{
			start: (15 * 60) + 5,
			end: (15 * 60) + 50
		}
	],
	//пятая
	[
		{
			start: (16 * 60) + 20,
			end: (17 * 60) + 5,
		},
		{
			start: (17 * 60) + 15,
			end: (18 * 60)
		}
	],
	//шестая
	[
		{
			start: (18 * 60) + 15,
			end: (19 * 60),
		},
		{
			start: (19 * 60) + 10,
			end: (19 * 60) + 55
		}
	],
	//седьмая
	[
		{
			start: (20 * 60) + 10,
			end: (20 * 60) + 55,
		},
		{
			start: (21 * 60) + 05,
			end: (21 * 60) + 55
		}
	],

];

/*
(часы * 60) + минуты

 */